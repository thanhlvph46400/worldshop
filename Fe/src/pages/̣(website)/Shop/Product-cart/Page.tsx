import { FaTrash } from "react-icons/fa";

const ProductCart = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto grid grid-cols-12 gap-8 mt-[60px] mb-[100px]">
        <div className="col-span-8 gap-8  ">
          <div className="*:font-medium *:text-[#262626] bg-[#F5F5F5] py-[13px]">
            <span className="mr-[200px]">Product</span>
            <span className="mr-[100px]">Price</span>
            <span className="mr-[100px]">Quantity</span>
            <span className="mr-[200px]">Subtotal</span>
          </div>
          <div className="mt-3 flex items-center">
            <img src="https://picsum.photos/id/1000/66/66.jpg" alt="image" />
            <span className="text-[#A3A3A3] font-medium ml-3 mr-[50px]">
              Asgaard sofa
            </span>
            <span className="text-[#A3A3A3] font-medium ">25.000.000đ</span>
            <span className="ml-[100px] mr-[100px]">1</span>
            <span className="ml-[20px] text-[#262626] font-medium">
              25.000.000đ
            </span>
            <FaTrash className="text-[#EF4444] ml-[50px]" />
          </div>
        </div>
        <div className="col-span-4 bg-[#F5F5F5] px-4 h-[262px]">
          <span className="font-semibold text-[24px] text-[#262626] mt-4 block">
            Cart Total
          </span>
          <hr className="text-[#A3A3A3] border-2 mt-2" />
          <div className="flex justify-between mt-3">
            <span className="font-medium text-[16px]">Subtotal</span>
            <span className="text-[#A3A3A3] font-medium">25.000.000đ</span>
          </div>
          <div className="flex justify-between mt-2">
            <span className="font-medium text-[16px]">Total</span>
            <span className="font-bold text-[#EF4444] text-[20px]">
              25.000.000đ
            </span>
          </div>
          <button className="justify-center text-center border-1 border-[#CA8A04] text-[#CA8A04] w-[314.66px] py-1 font-semibold mt-[30px]">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
