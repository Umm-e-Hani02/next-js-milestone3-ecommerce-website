import { Mail, Phone } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faXTwitter,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";

export default function TopBar() {
  return (
    <div className="max-w-[1440px] hidden lg:flex h-14 bg-[#252B42] text-white items-center justify-between px-5 mx-auto">
      <div className="flex items-center gap-x-5">
        <div className="flex text-sm font-bold gap-x-1">
          <Phone className="h-5" />
          (225) 555-0181
        </div>
        <div className="flex text-sm font-bold gap-x-1 cursor-pointer hover:text-gray-100">
          <Mail className="h-5" />
          quickcart@gmail.com
        </div>
      </div>
      <div>
        <p className="text-sm font-bold items-center">
          Follow Us and get a chance to win 80% off
        </p>
      </div>
      <div>
        <p className="flex text-sm font-bold items-center gap-x-4">
          Follow us:
            <FontAwesomeIcon icon={faInstagram} className="h-5 cursor-pointer" />
            <FontAwesomeIcon icon={faXTwitter} className="h-5 cursor-pointer" />
            <FontAwesomeIcon icon={faFacebookF} className="h-5 cursor-pointer" />
        </p>
      </div>
    </div>
  );
}
