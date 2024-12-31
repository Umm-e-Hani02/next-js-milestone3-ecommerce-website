import Category from "@/components/Category";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Long/Short Tops
const tops = [
  {
    imageSrc: "/women/tops/top1.jpg",
    imgAlt: "Top 1",
    actualPrice: "PKR 3800",
    price: "PKR 3100",
  },
  {
    imageSrc: "/women/tops/top2.jpg",
    imgAlt: "Top 2",
    actualPrice: "PKR 4900",
    price: "PKR 4300",
  },
  {
    imageSrc: "/women/tops/top3.jpg",
    imgAlt: "Top 3",
    actualPrice: "PKR 5000",
    price: "PKR 4500",
  },
  {
    imageSrc: "/women/tops/top4.jpg",
    imgAlt: "Top 4",
    actualPrice: "PKR 4500",
    price: "PKR 3800",
  },
  {
    imageSrc: "/women/tops/top5.jpg",
    imgAlt: "Top 5",
    actualPrice: "PKR 6400",
    price: "PKR 5800",
  },
  {
    imageSrc: "/women/tops/top6.jpg",
    imgAlt: "Top 6",
    actualPrice: "PKR 7000",
    price: "PKR 6200",
  },
  {
    imageSrc: "/women/tops/top7.jpg",
    imgAlt: "Top 7",
    actualPrice: "PKR 5600",
    price: "PKR 4800",
  },
  {
    imageSrc: "/women/tops/top8.jpg",
    imgAlt: "Top 8",
    actualPrice: "PKR 5500",
    price: "PKR 4700",
  },
];

// Traditional Dress
const traditional = [
  {
    imageSrc: "/women/traditional/traditional1.jpg",
    imgAlt: "Traditional Dress 1",
    actualPrice: "PKR 20000",
    price: "PKR 17000",
  },
  {
    imageSrc: "/women/traditional/traditional2.jpg",
    imgAlt: "Traditional Dress 2",
    actualPrice: "PKR 13000",
    price: "PKR 1000",
  },
  {
    imageSrc: "/women/traditional/traditional3.jpg",
    imgAlt: "Traditional Dress 3",
    actualPrice: "PKR 18000",
    price: "PKR 14000",
  },
  {
    imageSrc: "/women/traditional/traditional4.jpg",
    imgAlt: "Traditional Dress 4",
    actualPrice: "PKR 9700",
    price: "PKR 9000",
  },
  {
    imageSrc: "/women/traditional/traditional5.jpg",
    imgAlt: "Traditional Dress 5",
    actualPrice: "PKR 11000",
    price: "PKR 8500",
  },
  {
    imageSrc: "/women/traditional/traditional6.jpg",
    imgAlt: "Traditional Dress 6",
    actualPrice: "PKR 9000",
    price: "PKR 7800",
  },
  {
    imageSrc: "/women/traditional/traditional7.jpg",
    imgAlt: "Traditional Dress 7",
    actualPrice: "PKR 14000",
    price: "PKR 10000",
  },
  {
    imageSrc: "/women/traditional/traditional8.jpg",
    imgAlt: "Traditional Dress 8",
    actualPrice: "PKR 8500",
    price: "PKR 7800",
  },
];

// Winter Wear
const winterwear = [
  {
    imageSrc: "/women/winterwear/winterwear1.jpg",
    imgAlt: "Winter wear 1",
    actualPrice: "PKR 9000",
    price: "PKR 6000",
  },
  {
    imageSrc: "/women/winterwear/winterwear2.jpg",
    imgAlt: "Winter wear 2",
    actualPrice: "PKR 12000",
    price: "PKR 10000",
  },
  {
    imageSrc: "/women/winterwear/winterwear3.jpg",
    imgAlt: "Winter wear 3",
    actualPrice: "PKR 5000",
    price: "PKR 4500",
  },
  {
    imageSrc: "/women/winterwear/winterwear4.jpg",
    imgAlt: "Winter wear 4",
    actualPrice: "PKR 8000",
    price: "PKR 6000",
  },
  {
    imageSrc: "/women/winterwear/winterwear5.jpg",
    imgAlt: "Winter wear 5",
    actualPrice: "PKR 5500",
    price: "PKR 4800",
  },
  {
    imageSrc: "/women/winterwear/winterwear6.jpg",
    imgAlt: "Winter wear 6",
    actualPrice: "PKR 6200",
    price: "PKR 5600",
  },
  {
    imageSrc: "/women/winterwear/winterwear7.jpg",
    imgAlt: "Winter wear 7",
    actualPrice: "PKR 5300",
    price: "PKR 4700",
  },
  {
    imageSrc: "/women/winterwear/winterwear8.jpg",
    imgAlt: "Winter wear 8",
    actualPrice: "PKR 9800",
    price: "PKR 9000",
  },
];

// Foot Wear
const footwear = [
  {
    imageSrc: "/women/footwear/footwear1.jpg",
    imgAlt: "Foot wear 1",
    actualPrice: "PKR 8900",
    price: "PKR 8000",
  },
  {
    imageSrc: "/women/footwear/footwear2.jpg",
    imgAlt: "Foot wear 2",
    actualPrice: "PKR 5500",
    price: "PKR 4500",
  },
  {
    imageSrc: "/women/footwear/footwear3.jpg",
    imgAlt: "Foot wear 3",
    actualPrice: "PKR 5200",
    price: "PKR 4700",
  },
  {
    imageSrc: "/women/footwear/footwear4.jpg",
    imgAlt: "Foot wear 4",
    actualPrice: "PKR 12000",
    price: "PKR 9000",
  },
  {
    imageSrc: "/women/footwear/footwear5.jpg",
    imgAlt: "Foot wear 5",
    actualPrice: "PKR  10000",
    price: "PKR 7500",
  },
  {
    imageSrc: "/women/footwear/footwear6.jpg",
    imgAlt: "Foot wear 6",
    actualPrice: "PKR 9000",
    price: "PKR 7500",
  },
  {
    imageSrc: "/women/footwear/footwear7.jpg",
    imgAlt: "Foot wear 7",
    actualPrice: "PKR 5600",
    price: "PKR 5000",
  },
  {
    imageSrc: "/women/footwear/footwear8.jpg",
    imgAlt: "Foot wear 8",
    actualPrice: "PKR 13000",
    price: "PKR 10000",
  },
];

// Accessories
const accessories = [
  {
    imageSrc: "/women/accessories/accessory1.jpg",
    imgAlt: "accessory1",
    actualPrice: "PKR 2500",
    price: "PKR 2000",
  },
  {
    imageSrc: "/women/accessories/accessory2.jpg",
    imgAlt: "accessory2",
    actualPrice: "PKR 1500",
    price: "PKR 900",
  },
  {
    imageSrc: "/women/accessories/accessory3.jpg",
    imgAlt: "accessory3",
    actualPrice: "PKR 3200",
    price: "PKR 2600",
  },
  {
    imageSrc: "/women/accessories/accessory4.jpg",
    imgAlt: "accessory4",
    actualPrice: "PKR 650",
    price: "PKR 500",
  },
  {
    imageSrc: "/women/accessories/accessory5.jpg",
    imgAlt: "accessory5",
    actualPrice: "PKR 3500",
    price: "PKR 2700",
  },
  {
    imageSrc: "/women/accessories/accessory6.jpg",
    imgAlt: "accessory6",
    actualPrice: "PKR 8000",
    price: "PKR 7500",
  },
  {
    imageSrc: "/women/accessories/accessory7.jpg",
    imgAlt: "accessory7",
    actualPrice: "PKR 4000",
    price: "PKR 3500",
  },
  {
    imageSrc: "/women/accessories/accessory8.jpg",
    imgAlt: "accessory8",
    actualPrice: "PKR 2500",
    price: "PKR 2000",
  },
];

export default function Women() {
  return (
    <section className="max-w-[1440px] mt-3 mb-9 mx-auto">
      {/* Shirts */}

      <div className="flex flex-col mx-auto">
        <h2 className="text-center text-4xl font-bold pb-9">Long/Short Tops</h2>

        {/* Grid View */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10">
          {tops.map((tops, index) => (
            <div key={index}>
              <Category
                imageSrc={tops.imageSrc}
                imgAlt={tops.imgAlt}
                actualPrice={tops.actualPrice}
                price={tops.price}
              />
            </div>
          ))}
        </div>

        {/* Carousel for smaller screens */}
        <div className="md:hidden px-4 w-[270px] mx-auto rounded-lg">
          <Carousel className="relative">
            <CarouselContent>
              {tops.map((tops, index) => (
                <CarouselItem key={index}>
                  <Category
                    imageSrc={tops.imageSrc}
                    imgAlt={tops.imgAlt}
                    actualPrice={tops.actualPrice}
                    price={tops.price}
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
        <h2 className="text-center text-4xl font-bold pb-9">Traditional Dress</h2>

        {/* Grid View */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10">
          {traditional.map((traditional, index) => (
            <div key={index}>
              <Category
                imageSrc={traditional.imageSrc}
                imgAlt={traditional.imgAlt}
                actualPrice={traditional.actualPrice}
                price={traditional.price}
              />
            </div>
          ))}
        </div>

        {/* Carousel for smaller screens */}
        <div className="md:hidden px-4 w-[270px] mx-auto rounded-lg">
          <Carousel className="relative">
            <CarouselContent>
              {traditional.map((traditional, index) => (
                <CarouselItem key={index}>
                  <Category
                    imageSrc={traditional.imageSrc}
                    imgAlt={traditional.imgAlt}
                    actualPrice={traditional.actualPrice}
                    price={traditional.price}
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
