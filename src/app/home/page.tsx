import Link from "next/link";
import Category from "@/components/Category";
const bestproducts = [
  {
    imageSrc: "/women/tops/top6.jpg",
    imgAlt: "Product 1",
    actualPrice: "PKR 7000",
    price: "PKR 6200",
  },
  {
    imageSrc: "/men/shirts/shirt4.jpg",
    imgAlt: "Product 2",
    actualPrice: "PKR 5000",
    price: "PKR 4500",
  },
  {
    imageSrc: "/women/winterwear/winterwear3.jpg",
    imgAlt: "Product 3",
    actualPrice: "PKR 5000",
    price: "PKR 4500",
  },
  {
    imageSrc: "/men/kurtapajama/kurtapajama5.jpg",
    imgAlt: "Product 4",
    actualPrice: "PKR 4700",
    price: "PKR 4200",
  },
  {
    imageSrc: "/men/winterwear/winterwear2.jpg",
    imgAlt: "Product 5",
    actualPrice: "PKR 6400",
    price: "PKR 5900",
  },
  {
    imageSrc: "/men/footwear/footwear4.jpg",
    imgAlt: "Product 6",
    actualPrice: "PKR 12000",
    price: "PKR 9000",
  },
  {
    imageSrc: "/women/accessories/accessory3.jpg",
    imgAlt: "Product 7",
    actualPrice: "PKR 3200",
    price: "PKR 2600",
  },
  {
    imageSrc: "/men/accessories/accessory8.jpg",
    imgAlt: "Product 11",
    actualPrice: "PKR 25000",
    price: "PKR 2000",
  },
  {
    imageSrc: "/women/footwear/footwear3.jpg",
    imgAlt: "Product 15",
    actualPrice: "PKR 5200",
    price: "PKR 4700",
  },
  {
    imageSrc: "/women/accessories/accessory5.jpg",
    imgAlt: "Product 16",
    actualPrice: "PKR 3500",
    price: "PKR 2700",
  },
];

export default function Homepage() {
  return (
    <section className="max-w-[1440px] mx-auto text-white">
      <div className="flex bg-fuchsia-500">
        <div className="flex items-center h-[520px]">
          <div className="flex flex-col px-2 md:px-20">
            <h1 className="text-2xl lg:text-4xl font-bold font-sans mb-4 text-center md:text-start">
              NEW COLLECTION
            </h1>
            <p className="text-sm md:text-base lg:text-lg">
              Welcome to <b>Quickmart</b>! Discover the best deals, quality
              products, and fast delivery all in one place. Shop now and enjoy a
              seamless online shopping experience!
            </p>
            <button className="w-28 h-10 rounded-md mt-6 border hover:scale-110 duration-150 mx-auto md:mx-0">
              <Link href="/products">Shop Now</Link>
            </button>
          </div>
        </div>

        <div className="h-[520px] hidden lg:flex">
          <img className="h-[520px] object-cover" src="assets/bg.jpg" alt="" />
        </div>
      </div>

      {/* Best selling products */}
      <div className="my-9">
        <h1 className="text-3xl lg:text-4xl font-bold font-sans mb-9 text-[#252B42] text-center">
          Best Selling Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 px-5">
          {bestproducts.map((bestproducts, index) => (
            <div key={index}>
              <Category
                imageSrc={bestproducts.imageSrc}
                imgAlt={bestproducts.imgAlt}
                actualPrice={bestproducts.actualPrice}
                price={bestproducts.price}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Featured products */}
      <div className="mb-9">
        <h3 className="text-[#252B42] text-xl font-bold text-center py-2">
          Featured Products
        </h3>
        <div className="flex flex-col gap-y-9 md:flex-row mt-5 mx-3 gap-x-6 lg:mx-20 xl:mx-44 items-center justify-center lg:gap-x-5 xl:gap-x-10">

          {/* Kids Collection */}
          <div className="w-56 md:w-44 lg:w-52 h-96 shadow-lg rounded-lg hover:scale-110 duration-200">
            <img
              className="w-56 h-[280px] object-cover rounded-t-lg"
              src="/assets/kidscollection.jpg"
              alt=""
            />
            <p className="text-[#252B42] text-center leading-5 font-semibold mt-5 px-2">
              Adorable kids collection coming soon!
            </p>
          </div>

          {/* Skin Products */}
          <div className="w-56 md:w-44 lg:w-52 h-96 shadow-lg rounded-lg hover:scale-110 duration-200">
            <img
              className="w-56 h-[280px] object-cover rounded-t-lg"
              src="/assets/skinproducts.jpg"
              alt=""
            />
            <p className="text-[#252B42] text-center leading-5 font-semibold mt-5 px-2">
            Exclusive skin products coming soon!
            </p>
          </div>

          {/* Home Decor */}
          <div className="w-56 md:w-44 lg:w-52 h-96 shadow-lg rounded-lg hover:scale-110 duration-200">
            <img
              className="w-56 h-[280px] object-cover rounded-t-lg"
              src="/assets/homedecor.jpg"
              alt=""
            />
            <p className="text-[#252B42] text-center leading-5 font-semibold mt-5 px-2">
              Home decor arriving soon!
            </p>
          </div>

          {/* Gadgets */}
          <div className="w-56 md:w-44 lg:w-52 h-96 shadow-lg rounded-lg hover:scale-110 duration-200">
            <img
              className="w-56 h-[280px] object-cover rounded-t-lg"
              src="/assets/gadgets.jpg"
              alt=""
            />
            <p className="text-[#252B42] text-center leading-5 font-semibold mt-5 px-2">
              Cool gadgets coming soon!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
