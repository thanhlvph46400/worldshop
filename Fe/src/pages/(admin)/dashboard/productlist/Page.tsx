/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Product } from "../../../../interface/product";
import axios from "axios";
import {
  Button,
  Image,
  message,
  Popconfirm,
  Skeleton,
  Space,
  Table,
} from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const ProductlistAdmin: React.FC = () => {
  const nav = useNavigate();

  const [messageApi, contextHolder] = message.useMessage();
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:3000/api/products`);
      return res.data.map((product: Product) => ({
        key: product.id,
        ...product,
      }));
    },
  });
  const { mutate } = useMutation({
    mutationFn: async (id: number) => {
      return await axios.delete(`http://localhost:3000/products/${id}`);
    },
    onSuccess: () => {
      messageApi.success("Xóa sản phẩm thành công");
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },
    onError: (error: any) => {
      messageApi.error("Xóa sản phẩm không thành công", error.message);
    },
  });

  const onHandleRemove = (id: number) => {
    mutate(id);
  };
  const handleClick = () => {
    nav("/admin/product-add");
  };

  const columns = [
    {
      title: "Ảnh",
      dataIndex: "imageUrl",
      key: "imageUrl",
      render: (_: any, item: Product) => {
        return <Image width={50} src={item.imageUrl} />;
      },
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Danh mục",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Tình trạng",
      dataIndex: "available",
      key: "available",
      render: (_: any, item: Product) => {
        return <span>{item.available ? "Còn hàng" : "Hết hàng"}</span>;
      },
    },
    {
      title: "Loại hàng",
      key: "type",
      dataIndex: "type",
      render: (type: string) => {
        return <span>{type === "type1" ? "Hàng cũ" : "Hàng mới"}</span>;
      },
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
    },
    {
      key: "action",
      render: (_: any, item: Product) => (
        <div className="w-20">
          <Space>
            <Popconfirm
              title="Xóa sản phẩm"
              description="Bạn có chắc chắn muốn xóa sản phẩm này không?"
              onConfirm={() => onHandleRemove(item.id)}
              okText="Yes"
              cancelText="No"
            >
              <Button variant="solid" color="danger">
                Xóa
              </Button>
            </Popconfirm>
            <Link to={`/admin/product-edit/${item.id}`}>
              <Button
                variant="solid"
                style={{ backgroundColor: "#faad14", color: "white" }}
              >
                Cập nhật
              </Button>
            </Link>
          </Space>
        </div>
      ),
    },
  ];

  return (
    <>
      {contextHolder}
      <h1 className="text-3xl mb-5">Quản lý sản phẩm</h1>
      <Button variant="solid" color="primary" onClick={handleClick}>
        Thêm sản phẩm mới
      </Button>
      <Skeleton active loading={isLoading}>
        <Table columns={columns} dataSource={data}></Table>
      </Skeleton>
    </>
  );
};

export default ProductlistAdmin;
