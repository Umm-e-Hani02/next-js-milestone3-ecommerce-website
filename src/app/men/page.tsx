import Category from "@/components/Category";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Shirts
const shirts = [
  {
    imageSrc: "/men/shirts/shirt1.jpg",
    imgAlt: "Shirt 1",
    actualPrice: "PKR 3200",
    price: "PKR 2800",
  },
  {
    imageSrc: "/men/shirts/shirt2.jpg",
    imgAlt: "Shirt 2",
    actualPrice: "PKR 3500",
    price: "PKR 2900",
  },
  {
    imageSrc: "/men/shirts/shirt3.jpg",
    imgAlt: "Shirt 3",
    actualPrice: "PKR 2000",
    price: "PKR 1600",
  },
  {
    imageSrc: "/men/shirts/shirt4.jpg",
    imgAlt: "Shirt 4",
    actualPrice: "PKR 5000",
    price: "PKR 4500",
  },
  {
    imageSrc: "/men/shirts/shirt5.jpg",
    imgAlt: "Shirt 5",
    actualPrice: "PKR 4200",
    price: "PKR 3800",
  },
  {
    imageSrc: "/men/shirts/shirt6.jpg",
    imgAlt: "Shirt 6",
    actualPrice: "PKR 2800",
    price: "PKR 2200",
  },
  {
    imageSrc: "/men/shirts/shirt7.jpg",
    imgAlt: "Shirt 7",
    actualPrice: "PKR 3000",
    price: "PKR 2400",
  },
  {
    imageSrc: "/men/shirts/shirt8.jpg",
    imgAlt: "Shirt 8",
    actualPrice: "PKR 5500",
    price: "PKR 4800",
  },
];

// Kurta Pajama
const kurtapajama = [
  {
    imageSrc: "/men/kurtapajama/kurtapajama1.jpg",
    imgAlt: "Kurta Pajama 1",
    actualPrice: "PKR 6500",
    price: "PKR 6000",
  },
  {
    imageSrc: "/men/kurtapajama/kurtapajama2.jpg",
    imgAlt: "Kurta Pajama 2",
    actualPrice: "PKR 3800",
    price: "PKR 3200",
  },
  {
    imageSrc: "/men/kurtapajama/kurtapajama3.jpg",
    imgAlt: "Kurta Pajama 3",
    actualPrice: "PKR 5200",
    price: "PKR 4700",
  },
  {
    imageSrc: "/men/kurtapajama/kurtapajama4.jpg",
    imgAlt: "Kurta Pajama 4",
    actualPrice: "PKR 4900",
    price: "PKR 4500",
  },
  {
    imageSrc: "/men/kurtapajama/kurtapajama5.jpg",
    imgAlt: "Kurta Pajama 5",
    actualPrice: "PKR 4700",
    price: "PKR 4200",
  },
  {
    imageSrc: "/men/kurtapajama/kurtapajama6.jpg",
    imgAlt: "Kurta Pajama 6",
    actualPrice: "PKR 3900",
    price: "PKR 3400",
  },
  {
    imageSrc: "/men/kurtapajama/kurtapajama7.jpg",
    imgAlt: "Kurta Pajama 7",
    actualPrice: "PKR 3000",
    price: "PKR 2800",
  },
  {
    imageSrc: "/men/kurtapajama/kurtapajama8.jpg",
    imgAlt: "Kurta Pajama 8",
    actualPrice: "PKR 3200",
    price: "PKR 2800",
  },
];

// Winter Wear
const winterwear = [
  {
    imageSrc: "/men/winterwear/winterwear1.jpg",
    imgAlt: "Winter wear 1",
    actualPrice: "PKR 5500",
    price: "PKR 5000",
  },
  {
    imageSrc: "/men/winterwear/winterwear2.jpg",
    imgAlt: "Winter wear 2",
    actualPrice: "PKR 6400",
    price: "PKR 5900",
  },
  {
    imageSrc: "/men/winterwear/winterwear3.jpg",
    imgAlt: "Winter wear 3",
    actualPrice: "PKR 5200",
    price: "PKR 4700",
  },
  {
    imageSrc: "/men/winterwear/winterwear4.jpg",
    imgAlt: "Winter wear 4",
    actualPrice: "PKR 10000",
    price: "PKR 8000",
  },
  {
    imageSrc: "/men/winterwear/winterwear5.jpg",
    imgAlt: "Winter wear 5",
    actualPrice: "PKR  5500",
    price: "PKR 4500",
  },
  {
    imageSrc: "/men/winterwear/winterwear6.jpg",
    imgAlt: "Winter wear 6",
    actualPrice: "PKR 6000",
    price: "PKR 5400",
  },
  {
    imageSrc: "/men/winterwear/winterwear7.jpg",
    imgAlt: "Winter wear 7",
    actualPrice: "PKR 5000",
    price: "PKR 4500",
  },
  {
    imageSrc: "/men/winterwear/winterwear8.jpg",
    imgAlt: "Winter wear 8",
    actualPrice: "PKR 7300",
    price: "PKR 6800",
  },
];

// Foot Wear
const footwear = [
  {
    imageSrc: "/men/footwear/footwear1.jpg",
    imgAlt: "Foot wear 1",
    actualPrice: "PKR 9000",
    price: "PKR 5000",
  },
  {
    imageSrc: "/men/footwear/footwear2.jpg",
    imgAlt: "Foot wear 2",
    actualPrice: "PKR 6000",
    price: "PKR 5400",
  },
  {
    imageSrc: "/men/footwear/footwear3.jpg",
    imgAlt: "Foot wear 3",
    actualPrice: "PKR 5000",
    price: "PKR 4500",
  },
  {
    imageSrc: "/men/footwear/footwear4.jpg",
    imgAlt: "Foot wear 4",
    actualPrice: "PKR 12000",
    price: "PKR 9000",
  },
  {
    imageSrc: "/men/footwear/footwear5.jpg",
    imgAlt: "Foot wear 5",
    actualPrice: "PKR  11000",
    price: "PKR 8000",
  },
  {
    imageSrc: "/men/footwear/footwear6.jpg",
    imgAlt: "Foot wear 6",
    actualPrice: "PKR 15000",
    price: "PKR 13000",
  },
  {
    imageSrc: "/men/footwear/footwear7.jpg",
    imgAlt: "Foot wear 7",
    actualPrice: "PKR 4500",
    price: "PKR 3500",
  },
  {
    imageSrc: "/men/footwear/footwear8.jpg",
    imgAlt: "Foot wear 8",
    actualPrice: "PKR 6200",
    price: "PKR 5600",
  },
];

// Accessories
const accessories = [
  {
    imageSrc: "/men/accessories/accessory1.jpg",
    imgAlt: "accessory1",
    actualPrice: "PKR 2500",
    price: "PKR 2000",
  },
  {
    imageSrc: "/men/accessories/accessory2.jpg",
    imgAlt: "accessory2",
    actualPrice: "PKR 3000",
    price: "PKR 2500",
  },
  {
    imageSrc: "/men/accessories/accessory3.jpg",
    imgAlt: "accessory3",
    actualPrice: "PKR 4000",
    price: "PKR 3400",
  },
  {
    imageSrc: "/men/accessories/accessory4.jpg",
    imgAlt: "accessory4",
    actualPrice: "PKR 17000",
    price: "PKR 12000",
  },
  {
    imageSrc: "/men/accessories/accessory5.jpg",
    imgAlt: "accessory5",
    actualPrice: "PKR  6000",
    price: "PKR 4500",
  },
  {
    imageSrc: "/men/accessories/accessory6.jpg",
    imgAlt: "accessory6",
    actualPrice: "PKR 2200",
    price: "PKR 1800",
  },
  {
    imageSrc: "/men/accessories/accessory7.jpg",
    imgAlt: "accessory7",
    actualPrice: "PKR 4000",
    price: "PKR 3400",
  },
  {
    imageSrc: "/men/accessories/accessory8.jpg",
    imgAlt: "accessory8",
    actualPrice: "PKR 25000",
    price: "PKR 2000",
  },
];

export default function Men() {
  return (
    <section className="max-w-[1440px] mt-3 mb-9 mx-auto">
      {/* Shirts */}

      <div className="flex flex-col mx-auto">
        <h2 className="text-center text-4xl font-bold pb-9">Shirts</h2>

        {/* Grid View */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10">
          {shirts.map((shirt, index) => (
            <div key={index}>
              <Category
                imageSrc={shirt.imageSrc}
                imgAlt={shirt.imgAlt}
                actualPrice={shirt.actualPrice}
                price={shirt.price}
              />
            </div>
          ))}
        </div>

        {/* Carousel for smaller screens */}
        <div className="md:hidden px-4 w-[270px] mx-auto rounded-lg">
          <Carousel className="relative">
            <CarouselContent>
              {shirts.map((shirt, index) => (
                <CarouselItem key={index}>
                  <Category
                    imageSrc={shirt.imageSrc}
                    imgAlt={shirt.imgAlt}
                    actualPrice={shirt.actualPrice}
                    price={shirt.price}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="absolute -left-9 top-1/2 transform -translate-y-1/2" />
            <CarouselNext className="absolute -right-9 top-1/2 transform -translate-y-1/2" />
          </Carousel>
        </div>
      </div>

      {/* Kurta Pajama */}

      <div className=" flex flex-col pt-9 mx-auto">
        <h2 className="text-center text-4xl font-bold pb-9">Kurta Pajama</h2>

        {/* Grid View */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10">
          {kurtapajama.map((kurtapajama, index) => (
            <div key={index}>
              <Category
                imageSrc={kurtapajama.imageSrc}
                imgAlt={kurtapajama.imgAlt}
                actualPrice={kurtapajama.actualPrice}
                price={kurtapajama.price}
              />
            </div>
          ))}
        </div>

        {/* Carousel for smaller screens */}
        <div className="md:hidden px-4 w-[270px] mx-auto rounded-lg">
          <Carousel className="relative">
            <CarouselContent>
              {kurtapajama.map((kurtapajama, index) => (
                <CarouselItem key={index}>
                  <Category
                    imageSrc={kurtapajama.imageSrc}
                    imgAlt={kurtapajama.imgAlt}
                    actualPrice={kurtapajama.actualPrice}
                    price={kurtapajama.price}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="absolute -left-9 top-1/2 transform -translate-y-1/2" />
            <CarouselNext className="absolute -right-9 top-1/2 transform -translate-y-1/2" />
          </Carousel>
        </div>
      </div>

      {/* Winter wear */}

      <div className=" flex flex-col pt-9 mx-auto">
        <h2 className="text-center text-4xl font-bold pb-9">Winter wear</h2>

        {/* Grid View */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10">
          {winterwear.map((winterwear, index) => (
            <div key={index}>
              <Category
                imageSrc={winterwear.imageSrc}
                imgAlt={winterwear.imgAlt}
                actualPrice={winterwear.actualPrice}
                price={winterwear.price}
              />
            </div>
          ))}
        </div>

        {/* Carousel for smaller screens */}
        <div className="md:hidden px-4 w-[270px] mx-auto rounded-lg">
          <Carousel className="relative">
            <CarouselContent>
              {winterwear.map((winterwear, index) => (
                <CarouselItem key={index}>
                  <Category
                    imageSrc={winterwear.imageSrc}
                    imgAlt={winterwear.imgAlt}
                    actualPrice={winterwear.actualPrice}
                    price={winterwear.price}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="absolute -left-9 top-1/2 transform -translate-y-1/2" />
            <CarouselNext className="absolute -right-9 top-1/2 transform -translate-y-1/2" />
          </Carousel>
        </div>
        
      </div>

      {/* Foot Wear */}
      <div className=" flex flex-col pt-9 mx-auto">
        <h2 className="text-center text-4xl font-bold pb-9">Foot wear</h2>

        {/* Grid View */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10">
          {footwear.map((footwear, index) => (
            <div key={index}>
              <Category
                imageSrc={footwear.imageSrc}
                imgAlt={footwear.imgAlt}
                actualPrice={footwear.actualPrice}
                price={footwear.price}
              />
            </div>
          ))}
        </div>

        {/* Carousel for smaller screens */}
        <div className="md:hidden px-4 w-[270px] mx-auto rounded-lg">
          <Carousel className="relative">
            <CarouselContent>
              {footwear.map((footwear, index) => (
                <CarouselItem key={index}>
                  <Category
                    imageSrc={footwear.imageSrc}
                    imgAlt={footwear.imgAlt}
                    actualPrice={footwear.actualPrice}
                    price={footwear.price}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="absolute -left-9 top-1/2 transform -translate-y-1/2" />
            <CarouselNext className="absolute -right-9 top-1/2 transform -translate-y-1/2" />
          </Carousel>
        </div>
        
      </div>

      {/* Accessories */}
      <div className=" flex flex-col pt-9 mx-auto">
        <h2 className="text-center text-4xl font-bold pb-9">Accessories</h2>

        {/* Grid View */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10">
          {accessories.map((accessories, index) => (
            <div key={index}>
              <Category
                imageSrc={accessories.imageSrc}
                imgAlt={accessories.imgAlt}
                actualPrice={accessories.actualPrice}
                price={accessories.price}
              />
            </div>
          ))}
        </div>

        {/* Carousel for smaller screens */}
        <div className="md:hidden px-4 w-[270px] mx-auto rounded-lg">
          <Carousel className="relative">
            <CarouselContent>
              {accessories.map((accessories, index) => (
                <CarouselItem key={index}>
                  <Category
                    imageSrc={accessories.imageSrc}
                    imgAlt={accessories.imgAlt}
                    actualPrice={accessories.actualPrice}
                    price={accessories.price}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="absolute -left-9 top-1/2 transform -translate-y-1/2" />
            <CarouselNext className="absolute -right-9 top-1/2 transform -translate-y-1/2" />
          </Carousel>
        </div>
        
      </div>
    </section>
  );
}
