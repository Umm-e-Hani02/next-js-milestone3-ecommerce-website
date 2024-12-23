import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faXTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
export default function About() {
  return (
    <section className="max-w-[1440px] mx-auto">
      {/* About Us */}
      <div className="flex flex-col-reverse md:flex-row justify-between md:px-2 lg:px-20">
        <div className="md:w-1/2 mx-auto">
          <img
            className="h-[350px] lg:h-[500px] object-cover "
            src="assets/bg-1.png"
            alt="About Us Illustration"
          />
        </div>

        <div className="flex items-center md:w-1/2 mx-auto">
          <div className="flex flex-col gap-y-2 text-center my-7 md:text-start px-2">
            <h1 className="text-3xl font-bold text-[#252B42]">ABOUT US</h1>
            <p>
              Welcome to <b>Quickmart</b> your go-to destination for quality
              products and seamless shopping!
            </p>
            <p>
              We are passionate about bringing you the best selection at prices
              you will love. Whether its the latest trends or everyday
              essentials. We are here to make your shopping experience simple
              secure and satisfying.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-y-8 md:gap-x-12 lg:gap-x-32 py-5 my-14 items-center">
        <div className="flex flex-col items-center">
          <h1 className="text-[#252B42] text-3xl font-bold">15K</h1>
          <span className="test-sm text-gray-400 font-bold text-sm">
            Happy Customers
          </span>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-[#252B42] text-3xl font-bold">150K</h1>
          <span className="test-sm text-gray-400 font-bold text-sm">
            Monthly Visitors
          </span>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-[#252B42] text-3xl font-bold">15</h1>
          <span className="test-sm text-gray-400 font-bold text-sm">
            Countries Worldwide
          </span>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-[#252B42] text-3xl font-bold">100+</h1>
          <span className="test-sm text-gray-400 font-bold text-sm">
            Top Partners
          </span>
        </div>
      </div>

      {/* Our team */}

      <div className="flex flex-col items-center mx-auto">
        <div className="flex flex-col items-center justify-center mt-20 lg:w-[900px]">
          <h1 className="text-3xl text-[#252B42] font-bold">Meet Our Team</h1>
          <p className="text-center text-gray-400 mt-2 px-1">
            Behind <b>Quickmart</b> is a dedicated team of passionate
            individuals working together to bring you the best. From product
            selection to customer support, every member is committed to
            delivering excellence and ensuring your satisfaction.
          </p>
        </div>

        <div className="flex flex-col md:flex-row mt-10 mb-20 gap-y-7 md:gap-x-5 lg:gap-x-7">
          {/* User 1 */}

          <div className="h-[360px] shadow-md rounded-lg">
            <img
              className="h-60 w-56 object-cover rounded-t-lg"
              src="assets/user1.jpg"
              alt="Jerome Bell"
            />
            <div className="flex flex-col mt-4 text-[#252B42]">
              <h5 className="text-center font-bold text-lg text-[#242B42]">
                Jerome Bell
              </h5>
              <span className="text-center font-bold text-gray-500">IBM</span>
            </div>
            <div className="flex gap-x-2 items-center justify-center mt-2">
              <FontAwesomeIcon
                icon={faInstagram}
                className="h-5 text-pink-500 hover:text-pink-600 cursor-pointer hover:scale-125 duration-200"
              />
              <FontAwesomeIcon
                icon={faXTwitter}
                className="h-5 text-black hover:text-gray-900 cursor-pointer hover:scale-125 duration-200"
              />
              <FontAwesomeIcon
                icon={faFacebook}
                className="h-5 text-blue-600 hover:text-blue-700 cursor-pointer hover:scale-125 duration-200"
              />
            </div>
          </div>

          {/* User 2 */}

          <div className="h-[360px] shadow-md rounded-lg">
            <img
              className="h-60 w-56 object-cover rounded-t-lg"
              src="assets/user2.jpg"
              alt="Ronald Richards"
            />
            <div className="flex flex-col mt-4 text-[#252B42]">
              <h5 className="text-center font-bold text-lg text-[#242B42]">
                Ronald Richards
              </h5>
              <span className="text-center font-bold text-gray-500">eBay</span>
            </div>
            <div className="flex gap-x-2 items-center justify-center mt-2">
              <FontAwesomeIcon
                icon={faInstagram}
                className="h-5 text-pink-500 hover:text-pink-600 cursor-pointer hover:scale-125 duration-200"
              />
              <FontAwesomeIcon
                icon={faXTwitter}
                className="h-5 text-black hover:text-gray-900 cursor-pointer hover:scale-125 duration-200"
              />
              <FontAwesomeIcon
                icon={faFacebook}
                className="h-5 text-blue-600 hover:text-blue-700 cursor-pointer hover:scale-125 duration-200"
              />
            </div>
          </div>

          {/* User 3 */}

          <div className="h-[360px] shadow-md rounded-lg">
            <img
              className="h-60 w-56 object-cover rounded-t-lg"
              src="assets/user3.jpg"
              alt="Floyd Miles"
            />
            <div className="flex flex-col mt-4 text-[#252B42]">
              <h5 className="text-center font-bold text-lg text-[#242B42]">
                Floyd Miles
              </h5>
              <span className="text-center font-bold text-gray-500">
                Facebook
              </span>
            </div>
            <div className="flex gap-x-2 items-center justify-center mt-2">
              <FontAwesomeIcon
                icon={faInstagram}
                className="h-5 text-pink-500 hover:text-pink-600 cursor-pointer hover:scale-125 duration-200"
              />
              <FontAwesomeIcon
                icon={faXTwitter}
                className="h-5 text-black hover:text-gray-900 cursor-pointer hover:scale-125 duration-200"
              />
              <FontAwesomeIcon
                icon={faFacebook}
                className="h-5 text-blue-600 hover:text-blue-700 cursor-pointer hover:scale-125 duration-200"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Companies */}
      <div className="flex bg-gray-100 py-12">
        <div className="flex flex-col justify-center mx-auto">
          <h2 className="font-bold text-3xl pb-5 text-center font-sans text-[#252B42]">
            Big Companies Are Here
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-y-9 gap-x-8 lg:gap-x-14 my-10">
            <img
              className="hover:cursor-pointer hover:scale-125 duration-200"
              src="assets/vector1.png"
              alt=""
            />
            <img
              className="hover:cursor-pointer hover:scale-125 duration-200 h-12"
              src="assets/vector2.png"
              alt=""
            />
            <img
              className="hover:cursor-pointer hover:scale-125 duration-200 h-14"
              src="assets/vector3.png"
              alt=""
            />
            <img
              className="hover:cursor-pointer hover:scale-125 duration-200"
              src="assets/vector4.png"
              alt=""
            />
            <img
              className="hover:cursor-pointer hover:scale-125 duration-200 h-12"
              src="assets/vector5.png"
              alt=""
            />
            <img
              className="hover:cursor-pointer hover:scale-125 duration-200 h-16"
              src="assets/vector6.png"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Work with Us */}
      <div className="flex h-[550px]">
        <div className="flex flex-col bg-blue-600 text-white justify-center">
          <div className="mx-12">
            <h5 className="font-bold text-sm pb-5 text-center md:text-start">
              WORK WITH US
            </h5>
            <h2 className="font-bold text-3xl pb-5 text-center md:text-start ">
              Now Lets Grow Yours
            </h2>
            <p className="pb-2 text-center md:text-start">
              Be a part of a vibrant team where creativity meets innovation! We
              are looking for passionate and talented individuals to join us in
              shaping the future of online shopping.
            </p>
            <p className="pb-5 text-center md:text-start">
              If you are ready to grow learn and make an impact we would love to
              work with you!
            </p>

            <button className="border h-12 w-32 rounded-sm flex justify-center items-center mx-auto md:mx-0 hover:bg-white hover:border-blue-600 hover:text-blue-600 hover:scale-110 duration-150">
              <Link href="/contact">Contact Us</Link>
            </button>
          </div>
        </div>

        <div className="hidden lg:flex">
          <img
            className="h-[550px] object-cover"
            src="assets/background.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
