import React from "react";
import { BiSolidBookHeart } from "react-icons/bi";
import { FaRoad } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";

const AboutPage = () => {
  return (
    <div>
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
      <div className="max-w-6xl mx-auto mt-[60px]">
        <div className="grid grid-cols-12 gap-8 ">
          <div className="col-span-4 *:mx-auto">
            <TbTargetArrow className="w-[100px] h-[100px] text-[#CA8A04] block" />
            <span className="text-[32px] font-bold text-center block uppercase">
              OUR mission
            </span>
            <p className="text-center mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
          <div className="col-span-4 *:mx-auto">
            <FaRoad className="w-[100px] h-[100px] text-[#CA8A04] block" />
            <span className="text-[32px] font-bold text-center block uppercase">
              OUR vision
            </span>
            <p className="text-center mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
          <div className="col-span-4 *:mx-auto">
            <BiSolidBookHeart className="w-[100px] h-[100px] text-[#CA8A04] block" />
            <span className="text-[32px] font-bold text-center block uppercase">
              OUR values
            </span>
            <p className="text-center mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
        </div>
        {/* done */}
        <div className="flex mt-[60px] gap-8 mx-auto">
          <div className="col-span-6">
            <img src="https://picsum.photos/id/515/560/366.jpg" alt="" />
          </div>
          <div className="col-span-6 w-[560px] mt-[30px]">
            <span className="text-[32px] font-bold uppercase mb-[30px] block">
              about Furniro company
            </span>
            <p className="mb-[10px] ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          {/* done */}
        </div>
        <h1 className="text-center font-bold text-[30px] mt-[50px]">
          WE CREATE NATURAL WOOD FURNITURE <br /> AS WELL AS HIGH-QUALITY
        </h1>
        <div className="mt-[30px] flex gap-8 mb-[60px]">
          <div className="relative">
            <img
              src="https://picsum.photos/id/289/264/353.jpg"
              alt=""
              className="w-[264px] h-[353px] object-cover"
            />
            <div className="absolute bottom-4 left-4 text-white font-bold shadow-lg">
              FLOORING
            </div>
          </div>
          <div className="relative">
            <img
              src="https://picsum.photos/id/289/264/353.jpg"
              alt=""
              className="w-[264px] h-[353px] object-cover"
            />
            <div className="absolute bottom-4 left-4 text-white  font-bold shadow-lg">
              REFINISHING
            </div>
          </div>
          <div className="relative">
            <img
              src="https://picsum.photos/id/289/264/353.jpg"
              alt=""
              className="w-[264px] h-[353px] object-cover"
            />
            <div className="absolute bottom-4 left-4 text-white font-bold shadow-lg uppercase">
              installation
            </div>
          </div>
          <div className="relative">
            <img
              src="https://picsum.photos/id/289/264/353.jpg"
              alt=""
              className="w-[264px] h-[353px] object-cover"
            />
            <div className="absolute bottom-4 left-4 text-white  font-bold shadow-lg uppercase">
              warming the floor
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
