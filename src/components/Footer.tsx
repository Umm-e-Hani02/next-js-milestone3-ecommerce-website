import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faXTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"

export default function Footer() {
  return (
    <footer className="h-[488px] max-width-[1440px]">

      <div className="max-w-[1440px] mx-auto flex flex-col pl-10 gap-y-3 md:pl-0 md:flex-row h-[142px] bg-zinc-50 justify-center md:items-center md:gap-x-[460px] lg:gap-x-[700px] xl:gap-x-[850px] border-b">
        <div>
          <h3 className="text-[#252B42] font-bold text-2xl">Quickcart</h3>
        </div>
        <div className="flex gap-x-5">
          <FontAwesomeIcon icon={faInstagram} className="h-7 text-pink-500 hover:text-pink-600 cursor-pointer hover:scale-125 duration-200"/>
          <FontAwesomeIcon icon={faXTwitter} className="h-7 text-black hover:text-gray-900 cursor-pointer hover:scale-125 duration-200" />
          <FontAwesomeIcon icon={faFacebook} className="h-7 text-blue-600 hover:text-blue-700 cursor-pointer hover:scale-125 duration-200" />
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto h-[910px] bg-white flex p-10 lg:justify-center lg:items-center flex-col lg:h-[272px] gap-y-7 lg:flex-row">
        <div className="h-[170px] w-[148px] lg:mx-5">
            <h5 className="text-[#252B42] font-bold text-base pb-5">Company Info</h5>
            <p className="text-[#737373] text-sm font-bold hover:cursor-pointer hover:underline pb-3">About US</p>
            <p className="text-[#737373] text-sm font-bold hover:cursor-pointer hover:underline pb-3">Carrier</p>
            <p className="text-[#737373] text-sm font-bold hover:cursor-pointer hover:underline pb-3">We are hiring</p>
            <p className="text-[#737373] text-sm font-bold hover:cursor-pointer hover:underline">Blog</p>
        </div>
        <div className="h-[170px] w-[153px] lg:mx-5">
            <h5 className="text-[#252B42] font-bold text-base pb-5">Legal</h5>
            <p className="text-[#737373] text-sm font-bold hover:cursor-pointer hover:underline pb-3">About US</p>
            <p className="text-[#737373] text-sm font-bold hover:cursor-pointer hover:underline pb-3">Carrier</p>
            <p className="text-[#737373] text-sm font-bold hover:cursor-pointer hover:underline pb-3">We are hiring</p>
            <p className="text-[#737373] text-sm font-bold hover:cursor-pointer hover:underline">Blog</p>
        </div>
        <div className="h-[170px] w-[148px] lg:mx-5">
            <h5 className="text-[#252B42] font-bold text-base pb-5">Features</h5>
            <p className="text-[#737373] text-sm font-bold hover:cursor-pointer hover:underline pb-3">Business Marketing</p>
            <p className="text-[#737373] text-sm font-bold hover:cursor-pointer hover:underline pb-3">User Analytic</p>
            <p className="text-[#737373] text-sm font-bold hover:cursor-pointer hover:underline pb-3">Live Chat</p>
            <p className="text-[#737373] text-sm font-bold hover:cursor-pointer hover:underline">Unlimited Support</p>
        </div>
        <div className="h-[170px] w-[152px] lg:mx-5">
            <h5 className="text-[#252B42] font-bold text-base pb-5">Resources</h5>
            <p className="text-[#737373] text-sm font-bold hover:cursor-pointer hover:underline pb-3">IOS & Android</p>
            <p className="text-[#737373] text-sm font-bold hover:cursor-pointer hover:underline pb-3">Watch a Demo</p>
            <p className="text-[#737373] text-sm font-bold hover:cursor-pointer hover:underline pb-3">Customers</p>
            <p className="text-[#737373] text-sm font-bold hover:cursor-pointer hover:underline">API</p>
        </div>
        <div className="h-[131px] w-[260px] md:w-[321px] lg:mx-5">
            <h5 className="text-[#252B42] font-bold text-base pb-5">Get In Touch</h5>
            <div className="flex">
              <Input className="" placeholder="Your email"/>
              <Button>Subscribe</Button>
            </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto h-[74px] bg-zinc-50 p-10 flex justify-center items-center border-t">
        <p className="text-[#737373] text-xs font-bold md:text-sm">All Rights Reserved © 2024 Quickcart</p>
      </div>

    </footer>
  );
}
