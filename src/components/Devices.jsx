import { useTranslation } from "react-i18next";
import d1 from "../../public/images/d-1.png";
import d2 from "../../public/images/d-2.png";
import d3 from "../../public/images/d-3.png";
import thropie from "../../public/images/thropie.png";
import { useState, useEffect } from "react";

function Devices() {
  const { t } = useTranslation();

  // Create base device data structure
  const deviceData = [{ image: d1 }, { image: d2 }, { image: d3 }];

  // Create visible devices with translations
  const [visibleDevices, setVisibleDevices] = useState(
    deviceData.map((device) => ({
      ...device,
      name: t("devices.card.name"),
      bold: t("devices.card.bold"),
      desc: t("devices.card.description"),
      button: t("devices.card.button"),
    }))
  );

  // Update translations when language changes
  useEffect(() => {
    setVisibleDevices(
      deviceData.map((device) => ({
        ...device,
        name: t("devices.card.name"),
        bold: t("devices.card.bold"),
        desc: t("devices.card.description"),
        button: t("devices.card.button"),
      }))
    );
  }, [t]);

  return (
    <div className="h-[728px] bg-gradient-to-r from-[#391E3F] to-[#473163] py-[30px]">
      <div className="main-container relative">
        <div className="max-w-[728px]">
          <p className="text-white font-['Commissioner'] text-[clamp(16px,2.5vw,24px)] font-normal leading-[130%] pt-[30px] ">
            {t("devices.description")}
          </p>

          <h3 className="text-white font-['Commissioner'] text-[clamp(20px,2.8vw,30px)] font-bold leading-[130%] mt-[40px] md:mt-[73px]">
            {t("devices.subtitle")}
          </h3>
        </div>

        <div className="hidden nxl:block">
          <img
            src={thropie}
            className="absolute right-[-100px] top-[-380px] max-w-full"
            alt=""
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[30px] mt-[33px]">
          {visibleDevices.map((device, index) => {
            return (
              <div
                key={index}
                className="pt-[25px] md:pt-[35px] pb-[30px] md:pb-[41px] px-[20px] md:px-[31px] rounded-[16px] bg-[#F0F1F6]"
              >
                <h2 className="text-black font-['Commissioner'] text-[clamp(20px,2.5vw,28px)] font-bold leading-[120%]">
                  {device.name}
                </h2>
                <h2 className="text-[var(--Link,#FF8964)] font-['Commissioner'] text-[clamp(20px,2.5vw,28px)] font-bold leading-[120%]">
                  {device.bold}
                </h2>
                <p className="pt-[16px] text-[#404148] pb-[25px] md:pb-[35px] font-['Commissioner'] text-[clamp(14px,1.5vw,16px)] font-normal leading-[140%]">
                  {device.desc}
                </p>

                <img
                  src={device.image}
                  className="rounded-[8px] w-full"
                  alt={t("devices.card.imageAlt")}
                />

                <button className="rounded-[3px] bg-[linear-gradient(90deg,#3D387A_0%,#9F3259_100%)] w-full pt-[12px] md:pt-[16px] pb-[14px] md:pb-[18px] mt-[25px] md:mt-[35px] text-white text-[clamp(16px,1.8vw,18px)] font-semibold hover:opacity-90 transition-opacity">
                  {device.button}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Devices;
