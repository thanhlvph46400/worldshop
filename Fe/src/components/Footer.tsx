const FooterComponent = () => {
  return (
    <footer>
      <div className="  bg-black text-white *:font-poppins h-[425px]">
        <div className="grid grid-cols-4 gap-8 items-start max-w-6xl mx-auto ">
          <div className="mt-12">
            <div className="flex mb-4">
              <img src="public/Meubel House_Logos-05.png" alt="Nhshop" />
              <p className="font-bold text-4xl font-montserrat">Furnio</p>
            </div>
            <span className=" font-normal ">
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </span>
          </div>
          <div className="mt-12 ">
            <h2 className="text-[30px] font-semibold ">Sitemap</h2>
            <div className="mt-3 flex flex-col *:font-medium">
              <span>Home</span> <br />
              <span>Shop</span> <br />
              <span>About</span> <br />
              <span>Contact</span> <br />
            </div>
          </div>
          <div className="mt-12 ">
            <h2 className="text-[30px] font-semibold ">Help</h2>
            <div className="mt-3 flex flex-col *:font-medium">
              <span>Payment Options</span> <br />
              <span>Returns</span> <br />
              <span>Privacy Policies</span> <br />
            </div>
          </div>
          <div className="mt-12 ">
            <h2 className="text-[30px] font-semibold ">Location</h2>
            <div className="mt-3 flex flex-col *:font-medium">
              <span>support@euphoria.in</span> <br />
              <span>Ahmedabad Main Road</span> <br />
              <span>Udaipur, India- 313002</span> <br />
            </div>
          </div>
        </div>
        <hr className="mt-[30px]" />
        <p className="text-center mt-[35px]">
          Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterComponent;
