import { useState } from "react";
import p1 from "../../public/images/p-1.png";
import p2 from "../../public/images/p-2.png";
import p3 from "../../public/images/p-3.png";
import ProductsCard from "./ProductsCard";

function Products() {
  const [products, setProducts] = useState([
    {
      image: p1,
      name: "Вы покупаете наушники за 2,000₹",
      desc: "Скидка при оплате в G-Token",
      sub: "Стоимость наушников в G-Token",
      price: "1 920 ₹",
      detail: "(2,000-4%=1,920 ₹ )",
      btn: "экономия 80 ₹",
    },
    {
      image: p2,
      name: "Вы покупаете планшет за 20,000 ₹",
      desc: "Скидка при оплате в G-Token",
      sub: "Стоимость планшета в G-Token",
      price: "19 550 ₹",
      detail: "(20,000-4%=19,200 ₹ )",
      btn: "экономия 450 ₹",
    },
    {
      image: p3,
      name: "Вы покупаете ноутбук за 90,000₹",
      desc: "Скидка при оплате в G-Token",
      sub: "Стоимость ноутбука в G-Token",
      price: "88 425 ₹ ",
      detail: "(90,000-4%=86,100 ₹ )",
      btn: "экономия 1575 ₹",
    },
  ]);

  return (
    <div className="main-container">
      <h1 className="font-bold font-commissioner text-[36px] mt-[135px]">
        Выгодные покупки с Globel Token на маркетплейсе GLOBEL
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-[34px] mt-[50px]">
        {products && products.map((product) => <ProductsCard {...product} />)}
      </div>

      <h2 className="text-[#FF8964] mt-[106px] mb-[31px] font-['Commissioner'] text-[30px] font-semibold leading-normal">
        У вас всегда есть выбор
      </h2>
      <h2 className="text-black font-['Commissioner'] mb-[123px] text-[24px] font-semibold leading-normal">
        Вы можете заплатить полную стоимость товара, а можете купить G-Token и
        оплатить ими товар получив скидку
      </h2>
    </div>
  );
}

export default Products;
