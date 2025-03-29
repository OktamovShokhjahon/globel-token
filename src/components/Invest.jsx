import { useState } from "react";
import icon from "../../public/images/trend-up.svg";

function Invest() {
  const [cards, setCards] = useState([
    {
      name: "Вклад на 1 год",
      desc: "Если вы приобрели 1 000 G-Token за 100 000 ₹ на 12 месяцев, то через год количество ваших токенов",
      boldTitle: "увеличится до 1 200",
      detail:
        "С учетом роста стоимости токена в первый год, вы сможете продать",
      price: "за 156 000 ₹",
      button: "купить G-TOKEN на 1 год",
      icon,
    },
    {
      name: "Вклад на 1 год",
      desc: "Если вы приобрели 1 000 G-Token за 100 000 ₹ на 12 месяцев, то через год количество ваших токенов",
      boldTitle: "увеличится до 1 200",
      detail:
        "С учетом роста стоимости токена в первый год, вы сможете продать",
      price: "за 156 000 ₹",
      button: "купить G-TOKEN на 1 год",
      icon,
    },
    {
      name: "Вклад на 1 год",
      desc: "Если вы приобрели 1 000 G-Token за 100 000 ₹ на 12 месяцев, то через год количество ваших токенов",
      boldTitle: "увеличится до 1 200",
      detail:
        "С учетом роста стоимости токена в первый год, вы сможете продать",
      price: "за 156 000 ₹",
      button: "купить G-TOKEN на 1 год",
      icon,
    },
  ]);

  return (
    <div className="bg-hero3 h-[998px] bg-cover">
      <div className="main-container">
        <div>
          <h1 className="text-white font-['Commissioner'] text-3xl font-bold pt-[75px]">
            Globel Token — инвестируй и зарабатывай!
          </h1>
          <p className="mt-[10px] text-white font-['Commissioner'] text-xl font-normal leading-[130%]">
            Пользуйтесь вкладами с гарантированной доходностью до 100%
          </p>

          <p className="max-w-[630px] mb-[22px] w-full mt-[66px] text-white font-['Commissioner'] text-xl font-normal leading-[130%]">
            Сегодня мы предлагаем каждому пользователю вклады в G-Token на
            сроки:
          </p>

          <div className="flex items-center justify-between max-w-[612px] w-full">
            <div>
              <h3 className="text-[#FF8964] font-['Commissioner'] text-xl font-medium leading-[130%]">
                12 месяцев
              </h3>
              <h1 className="mt-[-10px] text-[#FF8964] font-['Commissioner'] text-[55px] font-semibold leading-[130%]">
                +20%
              </h1>
            </div>

            <div className="">
              <h3 className="text-[#FF8964] font-['Commissioner'] text-xl font-medium leading-[130%]">
                24 месяца
              </h3>
              <h1 className="mt-[-10px] text-[#FF8964] font-['Commissioner'] text-[55px] font-semibold leading-[130%]">
                +50%
              </h1>
            </div>

            <div>
              <h3 className="text-[#FF8964] font-['Commissioner'] text-xl font-medium leading-[130%]">
                36 месяцев
              </h3>
              <h1 className="mt-[-10px] text-[#FF8964] font-['Commissioner'] text-[55px] font-semibold leading-[130%]">
                +100%
              </h1>
            </div>
          </div>

          <h1 className="text-white font-['Commissioner'] text-3xl font-bold pt-[104px]">
            Ваш доход в G-Token
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[clamp(10px,2vw,20px)] relative top-[130px]">
          {cards.map((card, index) => (
            <div className="p-[30px] bg-[#F7F7FB] rounded-[10px]" key={index}>
              <div className="flex items-center justify-between">
                <h2 className="text-[#8009A9] font-commissioner text-[clamp(16px,1.8vw,20px)] font-bold">
                  {card.name}
                </h2>
                <img
                  className="w-[clamp(60px,8vw,90px)] h-[clamp(60px,8vw,90px)]"
                  src={card.icon}
                  alt=""
                />
              </div>

              <p className="text-[#696969] font-['Commissioner'] text-[clamp(14px,1.5vw,16px)] font-medium leading-[130%] mb-[clamp(15px,2vw,25px)]">
                {card.desc}{" "}
                <span className="text-[#D36670] font-bold">
                  {card.boldTitle}
                </span>
              </p>

              <p className="text-black text-center font-['Commissioner'] text-[clamp(14px,1.4vw,15.5px)] font-semibold leading-[130%] border-t pt-[clamp(15px,2vw,20px)] border-t-[#CECEDC]">
                {card.detail}
              </p>
              <p className="text-black text-center font-['Commissioner'] text-[clamp(20px,2.5vw,28px)] font-bold leading-[130%]">
                {card.price}
              </p>

              <button className="uppercase font-bold font-commissioner -tracking-tighter w-full text-white py-[10px] mt-[clamp(20px,2.5vw,29px)] rounded-[4px] bg-gradient-to-r from-[#3D387A] to-[#9F3259] hover:scale-105 transition-all duration-300 text-[14px]">
                {card.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Invest;
