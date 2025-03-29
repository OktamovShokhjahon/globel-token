import d1 from "../../public/images/d-1.png";
import d2 from "../../public/images/d-2.png";
import d3 from "../../public/images/d-3.png";
import thropie from "../../public/images/thropie.png";
import { useState, useEffect } from "react";

function Devices() {
  const [visibleDevices, setVisibleDevices] = useState([]);

  const devices = [
    {
      name: "Купив 10 G, вы получите",
      bold: "подарки стоимостью до 20 000 ₹",
      desc: "Например: смартфон Samsung Galaxy M35 5G, HONOR Pad 9 with Free Bluetooth Keyboard,  TOSHIBA 108 cm (43 inches) V Series Full HD Smart Android LED TV и много других ценных подарков.",
      image: d1,
      button: "Купить 10 G",
    },
    {
      name: "Купив 10 G, вы получите",
      bold: "подарки стоимостью до 20 000 ₹",
      desc: "Например: смартфон Samsung Galaxy M35 5G, HONOR Pad 9 with Free Bluetooth Keyboard,  TOSHIBA 108 cm (43 inches) V Series Full HD Smart Android LED TV и много других ценных подарков.",
      image: d2,
      button: "Купить 10 G",
    },
    {
      name: "Купив 10 G, вы получите",
      bold: "подарки стоимостью до 20 000 ₹",
      desc: "Например: смартфон Samsung Galaxy M35 5G, HONOR Pad 9 with Free Bluetooth Keyboard,  TOSHIBA 108 cm (43 inches) V Series Full HD Smart Android LED TV и много других ценных подарков.",
      image: d3,
      button: "Купить 10 G",
    },
  ];

  useEffect(() => {
    const checkVisibility = () => {
      const containerWidth =
        document.querySelector(".main-container")?.offsetWidth || 0;
      const cardWidth = 350; // Approximate width of a card including gaps
      const cardsPerRow = Math.floor(containerWidth / cardWidth);
      setVisibleDevices(devices.slice(0, cardsPerRow));
    };

    checkVisibility();
    window.addEventListener("resize", checkVisibility);

    return () => window.removeEventListener("resize", checkVisibility);
  }, []);

  return (
    <div className="h-[728px] bg-gradient-to-r from-[#391E3F] to-[#473163] py-[30px]">
      <div className="main-container relative">
        <div className="max-w-[728px]">
          <p className="text-white font-['Commissioner'] text-[clamp(16px,2.5vw,24px)] font-normal leading-[130%] pt-[30px] ">
            Даже если вы не выиграете, ваши токены все равно принесут вам
            прибыль так как они поступают вам на счет и через 12 месяцев вы
            получите на 20% токенов больше
          </p>

          <h3 className="text-white font-['Commissioner'] text-[clamp(20px,2.8vw,30px)] font-bold leading-[130%] mt-[40px] md:mt-[73px]">
            Инвестируйте в Globel Token — выигрывайте и зарабатывайте больше.
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
                  alt=""
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
