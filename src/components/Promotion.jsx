import { useTranslation } from "react-i18next";

function Promotion() {
  const { t } = useTranslation();

  return (
    <div className="main-container">
      <div className="mt-[160px] w-full max-w-[753px] mb-[120px]">
        <h1 className="text-black font-['Commissioner'] text-[50px] font-bold leading-none">
          {t("promotion.title")}{" "}
          <span className="text-[#F95E49] font-['Commissioner'] text-[50px] font-bold leading-none">
            {t("promotion.highlight")}
          </span>
        </h1>
        <p className="text-black font-['Commissioner'] text-[24px] font-semibold leading-none mt-[35px]">
          {t("promotion.subtitle")}
        </p>
      </div>
    </div>
  );
}

export default Promotion;
