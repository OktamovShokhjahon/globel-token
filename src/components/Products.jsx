import { useState } from "react";
import { useTranslation } from "react-i18next";
import p1 from "../../public/images/p-1.png";
import p2 from "../../public/images/p-2.png";
import p3 from "../../public/images/p-3.png";
import ProductsCard from "./ProductsCard";

function Products() {
  const { t } = useTranslation();

  const [products, setProducts] = useState([
    {
      image: p1,
      name: t("products.items.headphones.name"),
      desc: t("products.items.headphones.desc"),
      sub: t("products.items.headphones.sub"),
      price: t("products.items.headphones.price"),
      detail: t("products.items.headphones.detail"),
      btn: t("products.items.headphones.btn"),
    },
    {
      image: p2,
      name: t("products.items.tablet.name"),
      desc: t("products.items.tablet.desc"),
      sub: t("products.items.tablet.sub"),
      price: t("products.items.tablet.price"),
      detail: t("products.items.tablet.detail"),
      btn: t("products.items.tablet.btn"),
    },
    {
      image: p3,
      name: t("products.items.laptop.name"),
      desc: t("products.items.laptop.desc"),
      sub: t("products.items.laptop.sub"),
      price: t("products.items.laptop.price"),
      detail: t("products.items.laptop.detail"),
      btn: t("products.items.laptop.btn"),
    },
  ]);

  return (
    <div className="main-container">
      <h1 className="font-bold font-commissioner text-[36px] mt-[135px]">
        {t("products.title")}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-[34px] mt-[50px]">
        {products && products.map((product) => <ProductsCard {...product} />)}
      </div>

      <h2 className="text-[#FF8964] mt-[106px] mb-[31px] font-['Commissioner'] text-[30px] font-semibold leading-normal">
        {t("products.choice.title")}
      </h2>
      <h2 className="text-black font-['Commissioner'] mb-[123px] text-[24px] font-semibold leading-normal">
        {t("products.choice.description")}
      </h2>
    </div>
  );
}

export default Products;
