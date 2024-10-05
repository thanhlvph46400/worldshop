import { AiOutlineFileProtect } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { GiTrophyCup } from "react-icons/gi";
import { MdOutlineLocalShipping } from "react-icons/md";

const PageShop = () => {
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
      {/* banner slide done */}
      <div className="max-w-6xl mx-auto grid grid-cols-12 gap-8">
        <div className="col-span-3 mt-[30px]">
          <h2 className="font-semibold text-[20px]">Categories</h2>
          <span className="text-[#CA8A04] block mt-4">Cafe Chair</span>
          <p className="mt-2">Sofa</p>
          <p className="mt-2">Lamp</p>
          <p className="mt-2">Carpet</p>
          <p className="mt-2">Cabinet</p>
          <p className="mt-2">Tea table</p>
        </div>
        <div className="col-span-9">
          <div className="mt-[60px]">
            <div className="grid grid-cols-3 gap-8  mb-[25px] ">
              <div className="bg-neutral-100">
                <img
                  src="https://picsum.photos/id/1000/264/264.jpg"
                  alt="image"
                />
                <div className="mt-2 ml-2">
                  <span className="font-semibold">Syltherine</span>
                  <p className="text-[#898989] text-[13px] ">
                    Stylish cafe chair
                  </p>
                  <p className="text-red-500 mt-1 font-medium mb-2">
                    2.500.000đ
                  </p>
                </div>
                <div className="justify-center flex mb-2">
                  <button className="text-yellow-600 border-1 px-20 py-1 border-yellow-600 font-medium hover:bg-yellow-600 hover:text-white transition duration-300 ">
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="bg-neutral-100">
                <img
                  src="https://picsum.photos/id/1000/264/264.jpg"
                  alt="image"
                />
                <div className="mt-2 ml-2">
                  <span className="font-semibold">Leviosa</span>
                  <p className="text-[#898989] text-[13px]">
                    Stylish cafe chair
                  </p>
                  <p className="text-red-500 mt-1 font-medium mb-2">
                    1.800.000đ
                  </p>
                </div>
                <div className="justify-center flex mb-2">
                  <button className="text-yellow-600 border-1 px-20 py-1 border-yellow-600 font-medium hover:bg-yellow-600 hover:text-white transition duration-300 ">
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="bg-neutral-100">
                <img
                  src="https://picsum.photos/id/1000/264/264.jpg"
                  alt="image"
                />
                <div className="mt-2 ml-2">
                  <span className="font-semibold">Lolita</span>
                  <p className="text-[#898989] text-[13px]">luxury big sofa</p>
                  <p className="text-red-500 mt-1 font-medium mb-2">
                    2.000.000đ
                  </p>
                </div>
                <div className="justify-center flex mb-2">
                  <button className="text-yellow-600 border-1 px-20 py-1 border-yellow-600 font-medium hover:bg-yellow-600 hover:text-white transition duration-300 ">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-8  mb-[25px] ">
              <div className="bg-neutral-100">
                <img
                  src="https://picsum.photos/id/1000/264/264.jpg"
                  alt="image"
                />
                <div className="mt-2 ml-2">
                  <span className="font-semibold">Syltherine</span>
                  <p className="text-[#898989] text-[13px] ">
                    Stylish cafe chair
                  </p>
                  <p className="text-red-500 mt-1 font-medium mb-2">
                    2.500.000đ
                  </p>
                </div>
                <div className="justify-center flex mb-2">
                  <button className="text-yellow-600 border-1 px-20 py-1 border-yellow-600 font-medium hover:bg-yellow-600 hover:text-white transition duration-300 ">
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="bg-neutral-100">
                <img
                  src="https://picsum.photos/id/1000/264/264.jpg"
                  alt="image"
                />
                <div className="mt-2 ml-2">
                  <span className="font-semibold">Leviosa</span>
                  <p className="text-[#898989] text-[13px]">
                    Stylish cafe chair
                  </p>
                  <p className="text-red-500 mt-1 font-medium mb-2">
                    1.800.000đ
                  </p>
                </div>
                <div className="justify-center flex mb-2">
                  <button className="text-yellow-600 border-1 px-20 py-1 border-yellow-600 font-medium hover:bg-yellow-600 hover:text-white transition duration-300 ">
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="bg-neutral-100">
                <img
                  src="https://picsum.photos/id/1000/264/264.jpg"
                  alt="image"
                />
                <div className="mt-2 ml-2">
                  <span className="font-semibold">Lolita</span>
                  <p className="text-[#898989] text-[13px]">luxury big sofa</p>
                  <p className="text-red-500 mt-1 font-medium mb-2">
                    2.000.000đ
                  </p>
                </div>
                <div className="justify-center flex mb-2">
                  <button className="text-yellow-600 border-1 px-20 py-1 border-yellow-600 font-medium hover:bg-yellow-600 hover:text-white transition duration-300 ">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-8  mb-[25px] ">
              <div className="bg-neutral-100">
                <img
                  src="https://picsum.photos/id/1000/264/264.jpg"
                  alt="image"
                />
                <div className="mt-2 ml-2">
                  <span className="font-semibold">Syltherine</span>
                  <p className="text-[#898989] text-[13px] ">
                    Stylish cafe chair
                  </p>
                  <p className="text-red-500 mt-1 font-medium mb-2">
                    2.500.000đ
                  </p>
                </div>
                <div className="justify-center flex mb-2">
                  <button className="text-yellow-600 border-1 px-20 py-1 border-yellow-600 font-medium hover:bg-yellow-600 hover:text-white transition duration-300 ">
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="bg-neutral-100">
                <img
                  src="https://picsum.photos/id/1000/264/264.jpg"
                  alt="image"
                />
                <div className="mt-2 ml-2">
                  <span className="font-semibold">Leviosa</span>
                  <p className="text-[#898989] text-[13px]">
                    Stylish cafe chair
                  </p>
                  <p className="text-red-500 mt-1 font-medium mb-2">
                    1.800.000đ
                  </p>
                </div>
                <div className="justify-center flex mb-2">
                  <button className="text-yellow-600 border-1 px-20 py-1 border-yellow-600 font-medium hover:bg-yellow-600 hover:text-white transition duration-300 ">
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="bg-neutral-100">
                <img
                  src="https://picsum.photos/id/1000/264/264.jpg"
                  alt="image"
                />
                <div className="mt-2 ml-2">
                  <span className="font-semibold">Lolita</span>
                  <p className="text-[#898989] text-[13px]">luxury big sofa</p>
                  <p className="text-red-500 mt-1 font-medium mb-2">
                    2.000.000đ
                  </p>
                </div>
                <div className="justify-center flex mb-2">
                  <button className="text-yellow-600 border-1 px-20 py-1 border-yellow-600 font-medium hover:bg-yellow-600 hover:text-white transition duration-300 ">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <a
              href=""
              className="py-3 px-4 mr-3  bg-yellow-600 inline-block text-white font-bold rounded-md "
            >
              1
            </a>
            <a
              href=""
              className="py-3 px-4 mr-3  bg-[#A3A3A3] inline-block text-white font-bold rounded-md"
            >
              2
            </a>
            <a
              href=""
              className="py-3 px-4 mr-3 bg-[#A3A3A3] inline-block text-white font-bold rounded-md"
            >
              3
            </a>
            <a
              href=""
              className="py-3 px-4 mr-3 bg-[#A3A3A3] inline-block text-white font-bold rounded-md"
            >
              next
            </a>
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
      {/* done */}
    </div>
  );
};

export default PageShop;
