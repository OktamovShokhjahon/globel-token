import { useTranslation } from "react-i18next";

function Integration() {
  const { t } = useTranslation();

  return (
    <div className="bg-hero2 h-[887px] bg-cover relative">
      <h1 className="text-center text-white font-bold text-[clamp(10px,21vw,328.92px)] leading-[130%] tracking-[0.1em] opacity-5 whitespace-nowrap overflow-hidden absolute left-1/2 bottom-0 -translate-x-1/2 m-0 p-0 leading-0 h-[clamp(10px,21vw,328.92px)]">
        GLOBEL
      </h1>

      <div className="main-container pt-[clamp(40px,8vw,100px)]">
        <p className="text-white font-['Commissioner'] text-[clamp(20px,2vw,30px)] font-bold leading-[130%]">
          {t("integration.title")}
        </p>
        <p className="text-[#FF8964] font-['Commissioner'] text-[clamp(18px,1.5vw,24px)] relative font-semibold leading-[130%] before:content-[''] before:absolute before:left-0 before:top-0 before:w-[2px] before:h-[62px] flex items-center before:bg-[#FF8964] pl-[24px] mt-[clamp(25px,4vw,50px)] mb-[clamp(20px,3vw,40px)]">
          {t("integration.highlight")}
        </p>
        <p className="w-[clamp(300px,40vw,638px)] text-white font-['Commissioner'] text-[clamp(18px,1.5vw,24px)] font-medium leading-[130%]">
          {t("integration.description")}
        </p>
      </div>

      <div className="relative z-[2] mt-[clamp(30px,5vw,61px)] main-container">
        <button className="rounded-[3px] bg-gradient-to-r from-[#3D387A] to-[#9F3259] text-white font-['Commissioner'] text-[clamp(16px,1.8vw,24px)] font-medium leading-[130%] px-[clamp(30px,4vw,52px)] pt-[clamp(12px,1.5vw,18px)] pb-[clamp(14px,1.8vw,22px)] hover:scale-105 transition-all duration-300">
          {t("integration.button")}
        </button>
      </div>
    </div>
  );
}

export default Integration;
