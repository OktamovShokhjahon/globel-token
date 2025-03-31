import { useTranslation } from "react-i18next";

function Trust() {
  const { t } = useTranslation();

  return (
    <div className="max-w-[960px] mx-auto mt-[30px] sm:mt-[40px] md:mt-[50px] lg:mt-[60px] mb-[40px] sm:mb-[60px] md:mb-[70px] lg:mb-[80px] px-4 sm:px-6 lg:px-8">
      <p className="font-semibold text-[16px] sm:text-[20px] md:text-[24px] lg:text-[30px] text-black font-commissioner text-center leading-relaxed sm:leading-relaxed">
        {t("trust.mainText")}
      </p>
      <div className="flex w-full justify-center items-center my-[15px] sm:my-[20px] md:my-[30px] lg:my-[43px]">
        <div className="w-[40px] sm:w-[50px] md:w-[60px] lg:w-[75px] h-[1px] sm:h-[2px] bg-[#F95E49]"></div>
      </div>
      <p className="font-semibold text-[16px] sm:text-[20px] md:text-[24px] lg:text-[30px] text-black font-commissioner text-center leading-relaxed sm:leading-relaxed">
        {t("trust.secondaryText")}
      </p>
    </div>
  );
}

export default Trust;
