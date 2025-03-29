function Information() {
  const infos = [
    {
      title: "Globel Finance: Суть проекта",
      desc: "Globel Finance — это инновационная бонусно-платёжная система маркетплейса GLOBEL, которая призвана объединить все привычные преимущества бонусных систем маркетплейсов (скидки, бонусы, а....",
    },
    {
      title: "Globel Finance: Суть проекта",
      desc: "Globel Finance — это инновационная бонусно-платёжная система маркетплейса GLOBEL, которая призвана объединить все привычные преимущества бонусных систем маркетплейсов (скидки, бонусы, а....",
    },
    {
      title: "Globel Finance: Суть проекта",
      desc: "Globel Finance — это инновационная бонусно-платёжная система маркетплейса GLOBEL, которая призвана объединить все привычные преимущества бонусных систем маркетплейсов (скидки, бонусы, а....",
    },
    {
      title: "Globel Finance: Суть проекта",
      desc: "Globel Finance — это инновационная бонусно-платёжная система маркетплейса GLOBEL, которая призвана объединить все привычные преимущества бонусных систем маркетплейсов (скидки, бонусы, а....",
    },
    {
      title: "Globel Finance: Суть проекта",
      desc: "Globel Finance — это инновационная бонусно-платёжная система маркетплейса GLOBEL, которая призвана объединить все привычные преимущества бонусных систем маркетплейсов (скидки, бонусы, а....",
    },
    {
      title: "Globel Finance: Суть проекта",
      desc: "Globel Finance — это инновационная бонусно-платёжная система маркетплейса GLOBEL, которая призвана объединить все привычные преимущества бонусных систем маркетплейсов (скидки, бонусы, а....",
    },
    {
      title: "Globel Finance: Суть проекта",
      desc: "Globel Finance — это инновационная бонусно-платёжная система маркетплейса GLOBEL, которая призвана объединить все привычные преимущества бонусных систем маркетплейсов (скидки, бонусы, а....",
    },
    {
      title: "Globel Finance: Суть проекта",
      desc: "Globel Finance — это инновационная бонусно-платёжная система маркетплейса GLOBEL, которая призвана объединить все привычные преимущества бонусных систем маркетплейсов (скидки, бонусы, а....",
    },
    {
      title: "Globel Finance: Суть проекта",
      desc: "Globel Finance — это инновационная бонусно-платёжная система маркетплейса GLOBEL, которая призвана объединить все привычные преимущества бонусных систем маркетплейсов (скидки, бонусы, а....",
    },
  ];

  return (
    <div className="main-container">
      <h1 className="text-black font-['Commissioner'] text-[36px] font-bold leading-normal mt-[400px]">
        Полезная информация
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[30px] mt-[33px]">
        {infos &&
          infos.map((info) => {
            return (
              <div className="bg-[#F7F7FB] rounded-[10px] py-[40px] px-[30px]">
                <h2 className="text-black font-['Commissioner'] text-[24px] font-bold leading-normal">
                  {info.title}
                </h2>

                <p className="overflow-hidden text-black text-ellipsis font-['Commissioner'] mt-[35px] text-[20px] font-normal leading-[130%]">
                  {info.desc}
                </p>

                <div className="flex items-center gap-[10px] justify-end mt-[35px]">
                  <p className="text-[#CC306A] font-commissioner text-[13px] font-semibold uppercase flex items-center gap-[10px]">
                    подробнее
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
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13.5 5.25L20.25 12L13.5 18.75"
                        stroke="#CC306A"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
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
