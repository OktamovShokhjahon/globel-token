import union from "../../public/images/new-union.svg";

function Join() {
  const cards = [
    {
      bold: "Получайте скидки",
      title: "при оплате товаров и услуг Globel Token",
    },
    {
      bold: "Получайте скидки",
      title: "при оплате товаров и услуг Globel Token",
    },
    {
      bold: "Получайте скидки",
      title: "при оплате товаров и услуг Globel Token",
    },
    {
      bold: "Получайте скидки",
      title: "при оплате товаров и услуг Globel Token",
    },
  ];

  return (
    <div className="bg-[#412E46] min-h-[838px] relative px-4 md:px-6 lg:px-8 xl:px-0 pb-[80px]">
      <div className="max-w-[1200px] mx-auto flex  flex-col xl:flex-row xl:justify-between xl:gap-8 relative z-[1]">
        <div className="w-full xl:max-w-[556px]">
          <h1 className="text-[#FFEFEF] font-['Commissioner'] mt-[40px] sm:mt-[50px] lg:mt-[106px] text-[24px] sm:text-[28px] lg:text-[36px] font-bold leading-normal">
            Присоединяйтесь <br className="hidden sm:block" /> к сообществу
            GLOBEL уже сегодня!
          </h1>

          <p className="text-white font-['Commissioner'] text-[16px] sm:text-[18px] lg:text-[24px] font-normal leading-[130%] mt-[30px] sm:mt-[40px] lg:mt-[87px]">
            Мы создали Globel Token, чтобы каждый пользователь — будь то
            покупатель, продавец или инвестор — мог ощутить преимущества
            цифровых активов на уже знакомом формате онлайн торговли, получая
            при этом реальную выгоду от скидок, экономии и роста инвестиций.
          </p>

          <p className="text-white font-['Commissioner'] text-[16px] sm:text-[18px] lg:text-[24px] font-normal leading-[130%] mt-[15px] sm:mt-[20px] lg:mt-[34px]">
            С каждым новым участником сообщество GLOBEL растёт, создавая всё
            более благоприятные условия для владельцев токена.
          </p>
        </div>

        <div className="mt-[30px] sm:mt-[40px] lg:mt-[106px] mb-[40px] lg:mb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[15px] sm:gap-[20px] md:gap-[30px]">
            {cards &&
              cards.map((card, index) => {
                return (
                  <div
                    key={index}
                    className="bg-white w-full sm:w-[307px] p-[20px] sm:p-[28px] rounded-[16px]"
                  >
                    <div className="bg-black w-[52px] h-[2px] mb-[15px] sm:mb-[21px]"></div>
                    <h1 className="text-black font-['Commissioner'] text-[16px] sm:text-[18px] lg:text-[20px] font-semibold leading-[130%] mb-[80px] sm:mb-[100px] lg:mb-[150px]">
                      <span className="text-[#CC306A] font-['Commissioner'] text-[16px] sm:text-[18px] lg:text-[20px] font-bold leading-[130%]">
                        {card.bold}
                      </span>{" "}
                      {card.title}
                    </h1>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 hidden lg:block z-0">
        <img src={union} alt="Union decoration" className="w-full" />
      </div>
    </div>
  );
}

export default Join;
