import Category from "@/components/Category";

const category = [
  {
    imageSrc: "/men/kurtapajama/kurtapajama1.jpg",
    imgAlt: "Product 1",
    actualPrice: "PKR 6500",
    price: "PKR 6000",
  },
  {
    imageSrc: "/men/footwear/footwear1.jpg",
    imgAlt: "Product 2",
    actualPrice: "PKR 9000",
    price: "PKR 5000",
  },
  {
    imageSrc: "/women/winterwear/winterwear3.jpg",
    imgAlt: "Product 3",
    actualPrice: "PKR 5000",
    price: "PKR 4500",
  },
  {
    imageSrc: "/men/shirts/shirt4.jpg",
    imgAlt: "Product 4",
    actualPrice: "PKR 5000",
    price: "PKR 4500",
  },
  {
    imageSrc: "/women/traditional/traditional3.jpg",
    imgAlt: "Product 5",
    actualPrice: "PKR 18000",
    price: "PKR 14000",
  },
  {
    imageSrc: "/men/winterwear/winterwear2.jpg",
    imgAlt: "Product 6",
    actualPrice: "PKR 6400",
    price: "PKR 5900",
  },
  {
    imageSrc: "/men/footwear/footwear5.jpg",
    imgAlt: "Product 7",
    actualPrice: "PKR  11000",
    price: "PKR 8000",
  },
  
  {
    imageSrc: "/women/tops/top5.jpg",
    imgAlt: "Product 8",
    actualPrice: "PKR 6400",
    price: "PKR 5800",
  },
  {
    imageSrc: "/women/winterwear/winterwear2.jpg",
    imgAlt: "Product 9",
    actualPrice: "PKR 12000",
    price: "PKR 10000",
  },
  {
    imageSrc: "/women/footwear/footwear8.jpg",
    imgAlt: "Product 10",
    actualPrice: "PKR 13000",
    price: "PKR 10000",
  },
  {
    imageSrc: "/men/accessories/accessory8.jpg",
    imgAlt: "Product 11",
    actualPrice: "PKR 25000",
    price: "PKR 2000",
  },
  {
    imageSrc: "/women/accessories/accessory3.jpg",
    imgAlt: "Product 12",
    actualPrice: "PKR 3200",
    price: "PKR 2600",
  },
  {
    imageSrc: "/men/accessories/accessory4.jpg",
    imgAlt: "Product 13",
    actualPrice: "PKR 17000",
    price: "PKR 12000",
  },
  {
    imageSrc: "/men/winterwear/winterwear4.jpg",
    imgAlt: "Product 14",
    actualPrice: "PKR 10000",
    price: "PKR 8000",
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

export default function Products() {
  return (
    <section className="max-w-[1440px] mx-auto my-9">
      <h2 className="text-3xl font-bold text-[#252B42] text-center mb-7">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-5">
        {category.map((category, index) => (
          <div key={index}>
            <Category
              imageSrc={category.imageSrc}
              imgAlt={category.imgAlt}
              actualPrice={category.actualPrice}
              price={category.price}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
