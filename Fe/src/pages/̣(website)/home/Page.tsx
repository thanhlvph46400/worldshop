import React from "react";
import { AiOutlineFileProtect } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { GiTrophyCup } from "react-icons/gi";
import { IoMdArrowForward } from "react-icons/io";
import { MdOutlineDateRange, MdOutlineLocalShipping } from "react-icons/md";

const HomePage = () => {
  return (
    <div className=" ">
      {/* <img
        src="https://picsum.photos/id/623/1440/600.jpg"
        alt=""
        className="w-full mt-3 mb-3"
      /> */}
      <div
        id="carouselExampleInterval"
        className="carousel slide mt-3"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval={3000}>
            <img
              src="https://picsum.photos/id/623/1440/600.jpg"
              className="d-block w-100"
              alt="First slide"
            />
          </div>
          <div className="carousel-item" data-bs-interval={1000}>
            <img
              src="https://picsum.photos/id/625/1440/600.jpg"
              className="d-block w-100"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://picsum.photos/id/600/1440/600.jpg"
              className="d-block w-100"
              alt="Third slide"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* banner slider done */}
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between mt-[60px] mb-[25px]">
          <p className="font-bold text-[33px] font-montserrat">New Products</p>
          <button className="text-yellow-600 border-1 px-3 border-yellow-600 font-medium hover:bg-yellow-600 hover:text-white transition duration-300">
            View all products
          </button>
        </div>
        <div className="grid grid-cols-4 gap-8 items-start  ">
          <div className="bg-neutral-100">
            <img src="https://picsum.photos/id/1000/264/264.jpg" alt="image" />
            <div className="mt-2 ml-2">
              <span className="font-semibold">Syltherine</span>
              <p className="text-[#898989] text-[13px] ">Stylish cafe chair</p>
              <p className="text-red-500 mt-1 font-medium mb-2">2.500.000đ</p>
            </div>
            <div className="justify-center flex mb-2">
              <button className="text-yellow-600 border-1 px-20 py-1 border-yellow-600 font-medium hover:bg-yellow-600 hover:text-white transition duration-300 ">
                Add to cart
              </button>
            </div>
          </div>
          <div className="bg-neutral-100">
            <img src="https://picsum.photos/id/1000/264/264.jpg" alt="image" />
            <div className="mt-2 ml-2">
              <span className="font-semibold">Leviosa</span>
              <p className="text-[#898989] text-[13px]">Stylish cafe chair</p>
              <p className="text-red-500 mt-1 font-medium mb-2">1.800.000đ</p>
            </div>
            <div className="justify-center flex mb-2">
              <button className="text-yellow-600 border-1 px-20 py-1 border-yellow-600 font-medium hover:bg-yellow-600 hover:text-white transition duration-300 ">
                Add to cart
              </button>
            </div>
          </div>
          <div className="bg-neutral-100">
            <img src="https://picsum.photos/id/1000/264/264.jpg" alt="image" />
            <div className="mt-2 ml-2">
              <span className="font-semibold">Lolita</span>
              <p className="text-[#898989] text-[13px]">luxury big sofa</p>
              <p className="text-red-500 mt-1 font-medium mb-2">2.000.000đ</p>
            </div>
            <div className="justify-center flex mb-2">
              <button className="text-yellow-600 border-1 px-20 py-1 border-yellow-600 font-medium hover:bg-yellow-600 hover:text-white transition duration-300 ">
                Add to cart
              </button>
            </div>
          </div>
          <div className="bg-neutral-100">
            <img src="https://picsum.photos/id/1000/264/264.jpg" alt="image" />
            <div className="mt-2 ml-2">
              <span className="font-semibold">Respira</span>
              <p className="text-[#898989] text-[13px]">
                Outdoor bar table and stool
              </p>
              <p className="text-red-500 mt-1 font-medium mb-2">4.500.000đ</p>
            </div>
            <div className="justify-center flex mb-2">
              <button className="text-yellow-600 border-1 px-20 py-1 border-yellow-600 font-medium hover:bg-yellow-600 hover:text-white transition duration-300 ">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* done */}
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between mt-[60px] mb-[25px]">
          <p className="font-bold text-[33px] font-montserrat">Gallery</p>
          <button className="text-yellow-600 border-1 px-3 border-yellow-600 font-medium hover:bg-yellow-600 hover:text-white transition duration-300">
            View all gallery
          </button>
        </div>
        <div className="grid grid-cols-3 gap-8 ">
          <div className="">
            <img src="https://picsum.photos/id/806/368/264.jpg" alt="" />
          </div>
          <div className="">
            <img src="https://picsum.photos/id/806/368/264.jpg" alt="" />
          </div>
          <div className="">
            <img src="https://picsum.photos/id/806/368/264.jpg" alt="" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8 mt-[24px]">
          <div className="">
            <img src="https://picsum.photos/id/806/368/264.jpg" alt="" />
          </div>
          <div className="">
            <img src="https://picsum.photos/id/806/368/264.jpg" alt="" />
          </div>
          <div className="">
            <img src="https://picsum.photos/id/806/368/264.jpg" alt="" />
          </div>
        </div>
      </div>
      {/* done */}
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between mt-[60px] mb-[25px]">
          <p className="font-bold text-[33px] font-montserrat">News</p>
          <button className="text-yellow-600 border-1 px-3 border-yellow-600 font-medium hover:bg-yellow-600 hover:text-white transition duration-300">
            View all news
          </button>
        </div>
        <div className="grid grid-cols-4 gap-8 ">
          <div className="">
            <img src="https://picsum.photos/id/770/264/188.jpg" alt="" />
            <div className="flex items-center mt-1">
              <MdOutlineDateRange className="text-[11px] text-[#9CA3AF]" />
              <span className="text-[11px] text-[#9CA3AF] font-medium ml-1">
                24/4/2024
              </span>
            </div>
            <p className="font-semibold mb-2 text-[20px]">
              A bedroom must have something like this
            </p>
            <div className="flex items-center">
              <span className="text-red-500 font-semibold">Xem chi tiết</span>
              <IoMdArrowForward className="text-red-500 ml-1" />
            </div>
          </div>
          <div className="">
            <img src="https://picsum.photos/id/770/264/188.jpg" alt="" />
            <div className="flex items-center mt-1">
              <MdOutlineDateRange className="text-[11px] text-[#9CA3AF]" />
              <span className="text-[11px] text-[#9CA3AF] font-medium ml-1">
                24/4/2024
              </span>
            </div>
            <p className="font-semibold mb-2 text-[20px]">
              A bedroom must have something like this
            </p>
            <div className="flex items-center">
              <span className="text-red-500 font-semibold">Xem chi tiết</span>
              <IoMdArrowForward className="text-red-500 ml-1" />
            </div>
          </div>
          <div className="">
            <img src="https://picsum.photos/id/770/264/188.jpg" alt="" />
            <div className="flex items-center mt-1">
              <MdOutlineDateRange className="text-[11px] text-[#9CA3AF]" />
              <span className="text-[11px] text-[#9CA3AF] font-medium ml-1">
                24/4/2024
              </span>
            </div>
            <p className="font-semibold mb-2 text-[20px]">
              A bedroom must have something like this
            </p>
            <div className="flex items-center">
              <span className="text-red-500 font-semibold">Xem chi tiết</span>
              <IoMdArrowForward className="text-red-500 ml-1" />
            </div>
          </div>
          <div className="">
            <img src="https://picsum.photos/id/770/264/188.jpg" alt="" />
            <div className="flex items-center mt-1">
              <MdOutlineDateRange className="text-[11px] text-[#9CA3AF]" />
              <span className="text-[11px] text-[#9CA3AF] font-medium ml-1">
                24/4/2024
              </span>
            </div>
            <p className="font-semibold mb-2 text-[20px]">
              A bedroom must have something like this
            </p>
            <div className="flex items-center">
              <span className="text-red-500 font-semibold">Xem chi tiết</span>
              <IoMdArrowForward className="text-red-500 ml-1" />
            </div>
          </div>
        </div>
      </div>
      {/* done */}
      <div className="bg-[#FFF7ED] h-[180px] mt-[60px] ">
        <div className="grid grid-cols-4 gap-8 max-w-6xl mx-auto items-center h-[200px] ">
          <div className="flex justify-center">
            <GiTrophyCup className="w-[55px] h-[63px]" />
            <div className="ml-2">
              <span className="font-semibold text-[20px]">High Quality</span>
              <p className="text-[#898989] text-[16px]">
                Crafted from top materials
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <BiSupport className="w-[55px] h-[63px]" />
            <div className="ml-2">
              <span className="font-semibold text-[20px]">24 / 7 Support</span>
              <p className="text-[#898989] text-[16px]">Dedicated support</p>
            </div>
          </div>
          <div className="flex justify-center">
            <AiOutlineFileProtect className="w-[55px] h-[63px]" />
            <div className="ml-2">
              <span className="font-semibold text-[20px]">
                Warranty Protection
              </span>
              <p className="text-[#898989] text-[16px]">Over 2 years</p>
            </div>
          </div>
          <div className="flex justify-center">
            <MdOutlineLocalShipping className="w-[55px] h-[63px]" />
            <div className="ml-2">
              <span className="font-semibold text-[20px]">Free Shipping</span>
              <p className="text-[#898989] text-[16px]">Order over 150 $</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
