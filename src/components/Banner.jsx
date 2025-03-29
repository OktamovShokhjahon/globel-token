import img1 from "../../public/images/banner-left-bottom.png";

function Banner() {
  return (
    <div className="mt-[100px] relative h-[890px] bg-cover bg-right bg-hero">
      <div className="big-container px-4 sm:px-6 lg:px-[150px]">
        <div className="absolute bottom-0 left-0 max-w-full sm:max-w-[526px] z-0">
          <img src={img1} alt="" className="w-full relative z-0" />
        </div>

        <div className="relative z-[1]">
          <h1 className="text-white font-bold text-[40px] sm:text-[60px] lg:text-[80px] leading-tight sm:leading-normal tracking-[0] pt-[60px] sm:pt-[90px] lg:pt-[123px]">
            Globel Token
          </h1>
          <h2 className="text-white font-normal text-[20px] sm:text-[30px] lg:text-[40px] leading-[30px] sm:leading-[45px] lg:leading-[56px]">
            первая в мире цифровая валюта, которая <br />{" "}
            <span className="bg-[#FF8964] p-0">
              обеспечена реальными товарами!
            </span>
          </h2>
        </div>

        <div className="absolute bottom-[100px] sm:bottom-[60px] lg:bottom-[100px]">
          <button className="flex items-center justify-center bg-white rounded-[3px] box-border gap-[10px] sm:gap-[13px] py-[10px] sm:pt-[18px] sm:pb-[22px] px-[40px] sm:px-[77px] relative">
            <span className="text-[16px] sm:text-[20px] lg:text-[24px] font-semibold bg-gradient-to-r from-[#3d387a] to-[#9f3259] bg-clip-text text-transparent relative whitespace-nowrap w-fit">
              Купить
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
