const PaymentPage = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto grid grid-cols-12 gap-8 mt-[60px] mb-[30px]">
        <div className="col-span-6 *:mb-5">
          <h1 className="font-semibold text-[40px] text-[#262626]">
            Billing details
          </h1>
          <div className="flex gap-8 ">
            <div className="">
              <p className="font-medium text-[16px]">First Name</p>
              <input
                type="text"
                className="w-[264px] h-[35.6px] border-2 border-[#]"
              />
            </div>
            <div className="">
              <p className="font-medium text-[16px]">Last Name</p>
              <input
                type="text"
                className="w-[264px] h-[35.6px]  border-2 border-[#]"
              />
            </div>
          </div>
          <div className="">
            <p className="font-medium text-[16px]">Company Name (Optional)</p>
            <input
              type="text"
              className="w-[560px] h-[35.6px] border-2 border-[#]"
            />
          </div>
          <div className="">
            <p className="font-medium text-[16px]">Country / Region</p>
            <div className="relative">
              <select
                id="country"
                name="country"
                className="block  bg-white border border-gray-300 text-gray-500 w-[560px] h-[35.6px]"
              >
                <option value="" disabled selected>
                  Sri Lanka
                </option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="India">India</option>
                <option value="China">China</option>
                <option value="Japan">Japan</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
            </div>
          </div>
          <div className="">
            <p className="font-medium text-[16px]">Street address</p>
            <input
              type="text"
              className="w-[560px] h-[35.6px] border-2 border-[#]"
            />
          </div>
          <div className="">
            <p className="font-medium text-[16px]">Town / City</p>
            <input
              type="text"
              className="w-[560px] h-[35.6px] border-2 border-[#]"
            />
          </div>
          <div className="">
            <p className="font-medium text-[16px]">Province</p>
            <div className="relative">
              <select
                id="country"
                name="country"
                className="block  bg-white border border-gray-300 text-gray-500 w-[560px] h-[35.6px]"
              >
                <option value="" disabled selected>
                  Western Province
                </option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="India">India</option>
                <option value="China">China</option>
                <option value="Japan">Japan</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
            </div>
          </div>
          <div className="">
            <p className="font-medium text-[16px]">ZIP code</p>
            <input
              type="text"
              className="w-[560px] h-[35.6px] border-2 border-[#]"
            />
          </div>
          <div className="">
            <p className="font-medium text-[16px]">Phone</p>
            <input
              type="text"
              className="w-[560px] h-[35.6px] border-2 border-[#]"
            />
          </div>
          <div className="">
            <p className="font-medium text-[16px]">Email address</p>
            <input
              type="text"
              className="w-[560px] h-[35.6px] border-2 border-[#]"
            />
          </div>
        </div>
        <div className="col-span-6 mt-[60px]">
          <div className="flex justify-between ">
            <div className="*:mt-2">
              <span className="text-[24px] font-semibold">Product</span>
              <div className="">
                <span className="text-[#A3A3A3] ">Asgaard sofa</span>
                <span className="font-medium ml-3">X1</span>
              </div>
              <p className="font-medium">Subtotal</p>
              <p className="font-medium mt-3">Total</p>
            </div>
            <div className="text-right *:mt-2 ">
              <span className="text-[24px] font-semibold">Subtotal</span>
              <p className="font-medium">25.000.000đ</p>
              <p className="font-medium">25.000.000đ</p>
              <p className="text-[#B88E2F] font-bold text-[20px] mt-3">
                25.000.000đ
              </p>
            </div>
          </div>
          <hr className="border-2 mt-[20px]" />
          <div className="flex items-center mt-[20px] mb-[10px]">
            <p className="rounded-full w-[14px] h-[14px] bg-black flex"></p>
            <span className="font-medium ml-2">Direct Bank Transfer</span>
          </div>
          <span className="text-[#A3A3A3]  ">
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be shipped
            until the funds have cleared in our account.
          </span>
          <div className="mt-[10px] mb-[10px]">
            <input type="radio" />
            <span className="text-[#A3A3A3] ml-2 ">ATM Bank Transfer</span>
          </div>
          <div className="mb-[10px]">
            <input type="radio" />
            <span className="text-[#A3A3A3] ml-2">Cash On Delivery</span>
          </div>
          <p>
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our
            <span className="font-semibold">privacy policy</span>.
          </p>
          <div className="justify-center flex">
            <button className=" justify-center text-center border-1 border-[#CA8A04] text-[#CA8A04] w-[314.66px] py-1 font-semibold mt-[30px] block">
              Place order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
