const Category = ({
  imageSrc,
  imgAlt,
  actualPrice,
  price,
}: {
  imageSrc: string;
  imgAlt: string;
  actualPrice: string;
  price: string;
}) => {
  return (
    <div className="md:shadow-gray-300 md:shadow-lg border md:w-72 md:hover:scale-105 md:duration-150 cursor-pointer mx-auto rounded-lg">
      <img className="w-full h-96 object-cover rounded-t-lg mx-auto" src={imageSrc} alt={imgAlt} />
      <div className="p-4 text-center">
        <del className="text-gray-500 text-sm font-bold">{actualPrice}</del>
        <p className="text-lg text-green-600 font-semibold">
          {price}
        </p>
        <button className="mt-4 bg-blue-500 py-2 px-4 rounded text-white hover:bg-blue-700 hover:scale-110 duration-150">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Category;
