import { IoIosStar } from "react-icons/io";

const ProductDetail = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto grid grid-cols-12 gap-8 mt-[60px]">
        <div className="col-span-6  items-start">
          <div className="flex">
            <div className="col-span-1 *:mt-5 mr-[32px] ">
              <div className="first:mt-0 ">
                <img
                  src="https://picsum.photos/id/1000/66/66.jpg"
                  alt="image"
                />
              </div>
              <div className="">
                <img
                  src="https://picsum.photos/id/1000/66/66.jpg"
                  alt="image"
                />
              </div>
              <div className="">
                <img
                  src="https://picsum.photos/id/1000/66/66.jpg"
                  alt="image"
                />
              </div>
              <div className="">
                <img
                  src="https://picsum.photos/id/1000/66/66.jpg"
                  alt="image"
                />
              </div>
              <div className="">
                <img
                  src="https://picsum.photos/id/1000/66/66.jpg"
                  alt="image"
                />
              </div>
            </div>
            <div className="col-span-5">
              <div className="">
                <img
                  src="https://picsum.photos/id/1000/461/461.jpg"
                  alt="image"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between *:text-[20px] w-[530px] mt-[100px] *:font-semibold">
            <span>Description</span>
            <span className="text-[#A3A3A3]">Additional Information</span>
            <span className="text-[#A3A3A3]">Reviews [5]</span>
          </div>
        </div>
        <div className="col-span-6">
          <span className="text-[262626] font-medium text-[20px]">
            Asgaard sofa
          </span>
          <p className="font-bold text-[40px] text-red-500 mt-1">25.000.000đ</p>
          <div className="flex items-center mt-2">
            <div className="flex text-[#FFC700] *:mr-1 *:w-[20px] *:h-[20px]">
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
            </div>
            <div className="text-[#9F9F9F] text-[14px]">
              <span className="mr-2 ml-2">|</span>
              <span> 5 Customer Review</span>
            </div>
          </div>
          <span className="text-[16px] font-medium mt-3 block">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </span>
          <div className="mt-3">
            <span className="text-[#A3A3A3] text-[16px]">Size</span>
            <div className=" flex *:text-[13px]">
              <a
                href=""
                className=" mr-3 items-center justify-center bg-yellow-600  text-white font-bold rounded-md  w-[30px] h-[30px] flex "
              >
                L
              </a>
              <a
                href=""
                className="mr-3 flex items-center justify-center bg-[#A3A3A3] text-white font-bold rounded-md w-[30px] h-[30px] "
              >
                XL
              </a>
              <a
                href=""
                className="flex items-center justify-center bg-[#A3A3A3] text-white font-bold rounded-md w-[30px] h-[30px] "
              >
                XS
              </a>
            </div>
          </div>
          <div className="mt-3">
            <span className="text-[#A3A3A3] text-[16px]">Color</span>
            <div className=" flex *:text-[13px]">
              <a
                href=""
                className=" mr-3  bg-[#816DFA] rounded-full  w-[30px] h-[30px] flex "
              ></a>
              <a
                href=""
                className=" mr-3  bg-[#000000] rounded-full  w-[30px] h-[30px] flex"
              ></a>
              <a
                href=""
                className=" mr-3  bg-[#B88E2F] rounded-full  w-[30px] h-[30px] flex "
              ></a>
            </div>
          </div>
          <div className="flex mt-4">
            <div className="flex w-[114px] h-[39px] border-1 border-neutral-300 justify-center items-center rounded-md mr-2">
              <span className="mr-9">-</span>
              <p>1</p>
              <span className="ml-9">+</span>
            </div>
            <button className="w-[200px] h-[39px] border-1 border-[#CA8A04] rounded-md text-[#CA8A04] mr-2">
              Add To Cart
            </button>
            <div className="flex items-center w-[200px] h-[39px] border-1 border-black justify-center rounded-md">
              <span className="mr-2 ">+</span>
              <button>Compare</button>
            </div>
          </div>
          <hr className="mt-4" />
          <div className="*:text-[#A3A3A3] mt-2">
            <p>SKU : SS001</p>
            <p>Category: Sofa</p>
            <p>Tags: Sofa, Chair, Home, Shop</p>
          </div>
        </div>
      </div>
      {/* done */}
      <div className="max-w-6xl mx-auto mt-[20px]">
        <hr />
        <p className="text-[#A3A3A3] font-medium text-[16px] mt-4">
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
          portable active stereo speaker takes the unmistakable look and sound
          of Marshall, unplugs the chords, and takes the show on the road.
        </p>
        <span className="text-[#A3A3A3] font-medium text-[16px] mt-2 block">
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of
          vintage styled engineering. Setting the bar as one of the loudest
          speakers in its class, the Kilburn is a compact, stout-hearted hero
          with a well-balanced audio which boasts a clear midrange and extended
          highs for a sound that is both articulate and pronounced. The analogue
          knobs allow you to fine tune the controls to your personal preferences
          while the guitar-influenced leather strap enables easy and stylish
          travel.
        </span>
        <div className="flex gap-8 mt-4">
          <img src="https://picsum.photos/id/1000/560/330.jpg" alt="image" />
          <img src="https://picsum.photos/id/1000/560/330.jpg" alt="image" />
        </div>
        <h1 className="text-[40px] font-bold text-center mt-[60px]">
          Related Products
        </h1>
        <div className="grid grid-cols-4 gap-8 items-start  mt-[20px] mb-[60px]">
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
    </div>
  );
};

export default ProductDetail;
