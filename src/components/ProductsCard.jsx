function ProductsCard({ image, name, desc, sub, price, detail, btn }) {
  return (
    <div className="bg-white rounded-[10px]flex flex-col max-w-[457px]">
      <div className="max-w-[457px]">
        <img src={image} alt={name} className="w-full" />
      </div>

      <div className="flex flex-col gap-[10px] py-[44px] px-[33px] bg-[#F7F7FB]">
        <h3 className="font-commissioner text-[22px] font-bold">{name}</h3>

        <div className="flex items-center gap-[10px] my-[10px]">
          <p className="text-[13px] text-[#696969]">{desc}</p>
          <span className="bg-[#FF8964] text-white rounded px-[16px] text-[14px] py-[9px]">
            4%
          </span>
        </div>

        <div className="flex flex-col gap-[5px] mb-[15px]">
          <p className="text-[14px] text-[#666] font-medium">{sub}</p>
          <div className="flex items-center gap-[10px]">
            <span className="text-[20px] font-semibold">{price}</span>
            <span className="text-[14px] text-[#666]">{detail}</span>
          </div>
        </div>

        <button className="rounded-[4px] bg-gradient-to-r from-[#3D387A] to-[#9F3259] text-white w-full py-[10px] hover:scale-105 transition-all duration-300">
          {btn}
        </button>
      </div>
    </div>
  );
}

export default ProductsCard;
