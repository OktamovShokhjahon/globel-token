import { useTranslation } from "react-i18next";

function Buy() {
  const { t } = useTranslation();

  return (
    <div className="main-container flex flex-col lg:flex-row items-center gap-[30px] my-[40px] lg:my-[80px] px-4 lg:px-0">
      <h1 className="text-black font-['Commissioner'] text-[24px] lg:text-[30px] font-bold leading-[130%] text-center lg:text-left">
        {t("buy.title")}
      </h1>
      <div className="w-full lg:max-w-[300px]">
        <button className="w-full lg:w-auto rounded-[4px] bg-[linear-gradient(90deg,#3D387A_0%,#9F3259_100%)] py-[10px] text-white px-[28px]">
          {t("buy.button")}
        </button>
      </div>
    </div>
  );
}

export default Buy;
