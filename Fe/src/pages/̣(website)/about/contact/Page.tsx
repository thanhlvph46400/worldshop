import { AiFillTikTok } from "react-icons/ai";
import { CiShare2 } from "react-icons/ci";
import {
  FaFacebookSquare,
  FaInstagram,
  FaMapMarkerAlt,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { FaUsersRectangle } from "react-icons/fa6";
import { IoMdPaperPlane } from "react-icons/io";

const ContactPage = () => {
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
      {/*  banner slide */}
      <div className="max-w-6xl mx-auto mt-[60px]">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-4 flex ">
            <div className="border-solid border-2 border-[#CA8A04] w-[95px] h-[60px] flex justify-center items-center box-border">
              <FaMapMarkerAlt className="w-[40px] h-[40px] text-[#CA8A04] shrink-0" />
            </div>
            <div className=" ml-6 mt-2">
              <span className="text-[24px] font-bold uppercase">address</span>
              <p className="text-[#71717A] text-[18px] mt-3">
                60/850 Đường Láng, Láng Thượng, Đống Đa, Hà Nội
              </p>
            </div>
          </div>
          <div className="col-span-4 flex ">
            <div className="border-solid border-2 border-[#CA8A04] w-[60px] h-[60px] flex justify-center items-center box-border">
              <FaUsersRectangle className="w-[40px] h-[40px] text-[#CA8A04] shrink-0" />
            </div>
            <div className=" ml-6 mt-2">
              <span className="text-[24px] font-bold uppercase">
                contact details
              </span>
              <p className="text-[#71717A] text-[18px] mt-3">
                info@furniro.com
              </p>
              <p className="text-[#71717A] font-bold text-[24px]">
                02056278686
              </p>
            </div>
          </div>
          <div className="col-span-4 flex ">
            <div className="border-solid border-2 border-[#CA8A04] w-[60px] h-[60px] flex justify-center items-center box-border">
              <CiShare2 className="w-[40px] h-[40px] text-[#CA8A04] shrink-0" />
            </div>
            <div className=" ml-6 mt-2">
              <span className="text-[24px] font-bold uppercase">
                social networks
              </span>
              <div className="flex *:w-[40px] *:h-[40px] *:text-[#71717A] mt-3 *:ml-3">
                <FaFacebookSquare />
                <FaInstagram />
                <AiFillTikTok />
                <FaTwitterSquare />
                <FaYoutubeSquare />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F1F1F1] h-[auto] mt-[60px] grid grid-cols-1 lg:grid-cols-12 gap-8 mx-auto max-w-8xl">
        <div className="lg:col-span-6 w-full h-auto">
          <img
            src="https://picsum.photos/id/165/615/425.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-6">
          <span className="uppercase font-semibold text-[20px] block mt-[40px] mb-[10px]">
            contact
          </span>
          <h1 className="uppercase font-bold text-[40px]">
            connect with us now
          </h1>
          <div className="grid grid-cols-6 gap-8 *:text-[rgb(156,163,175)] mt-[40px]">
            <div className="col-span-3 ">
              <span>First Name</span>
              <hr />
            </div>
            <div className="col-span-3">
              <span>Last Name</span>
              <hr />
            </div>
            <div className="col-span-3">
              <span>Email</span>
              <hr />
            </div>
            <div className="col-span-3">
              <span>Phone Number</span>
              <hr />
            </div>
            <div className="col-span-6">
              <span>Message</span>
              <hr />
            </div>
          </div>
          <button className="flex justify-center items-center bg-[#CA8A04] w-[200px] h-[40px] text-white mt-[30px]">
            <IoMdPaperPlane />
            <span className=" ml-1 text-[16px] font-bold">Send Infomation</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
