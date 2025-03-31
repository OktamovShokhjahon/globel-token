import { useTranslation } from "react-i18next";

function Information() {
  const { t } = useTranslation();

  const infos = [
    {
      title: t("information.card.title"),
      desc: t("information.card.description"),
    },
    {
      title: t("information.card.title"),
      desc: t("information.card.description"),
    },
    {
      title: t("information.card.title"),
      desc: t("information.card.description"),
    },
    {
      title: t("information.card.title"),
      desc: t("information.card.description"),
    },
    {
      title: t("information.card.title"),
      desc: t("information.card.description"),
    },
    {
      title: t("information.card.title"),
      desc: t("information.card.description"),
    },
    {
      title: t("information.card.title"),
      desc: t("information.card.description"),
    },
    {
      title: t("information.card.title"),
      desc: t("information.card.description"),
    },
    {
      title: t("information.card.title"),
      desc: t("information.card.description"),
    },
  ];

  return (
    <div className="main-container">
      <h1 className="text-black font-['Commissioner'] text-[36px] font-bold leading-normal mt-[400px]">
        {t("information.title")}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[30px] mt-[33px]">
        {infos &&
          infos.map((info, index) => {
            return (
              <div
                key={index}
                className="bg-[#F7F7FB] rounded-[10px] py-[40px] px-[30px]"
              >
                <h2 className="text-black font-['Commissioner'] text-[24px] font-bold leading-normal">
                  {info.title}
                </h2>

                <p className="overflow-hidden text-black text-ellipsis font-['Commissioner'] mt-[35px] text-[20px] font-normal leading-[130%]">
                  {info.desc}
                </p>

                <div className="flex items-center gap-[10px] justify-end mt-[35px]">
                  <p className="text-[#CC306A] font-commissioner text-[13px] font-semibold uppercase flex items-center gap-[10px]">
                    {t("information.readMore")}
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.75 12H20.25"
                        stroke="#CC306A"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.5 5.25L20.25 12L13.5 18.75"
                        stroke="#CC306A"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Information;
