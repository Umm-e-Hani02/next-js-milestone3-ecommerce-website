import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faXTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
export default function Contact() {
  return (
    <section className="flex flex-col lg:flex-row lg:h-[630px] w-full max-width-[1440px] bg-gradient-to-r from-cyan-900 via-cyan-600 to-teal-600 items-center justify-between lg:px-10 xl:px-32 mx-auto">

      <div className="flex flex-col items-center lg:items-start gap-y-5 w-[270px] md:w-[370px] text-white pt-32 lg:pt-0">
        <h2 className="text-3xl font-bold">CONTACT US</h2>
        <p className="mb-4 text-center lg:text-start">
          Facing challenges trying to resolve the conflict between the two major
          realms of Classical Physics? Reach out to us for expert guidance and
          solutions!
        </p>

        <div className="flex gap-x-10">
          <FontAwesomeIcon icon={faInstagram} className="h-7 cursor-pointer hover:scale-125 duration-200"/>
          <FontAwesomeIcon icon={faXTwitter} className="h-7 cursor-pointer hover:scale-125 duration-200" />
          <FontAwesomeIcon icon={faFacebook} className="h-7 cursor-pointer hover:scale-125 duration-200" />
        </div>
      </div>

      <div className="relative flex mt-20 lg:mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 relative lg:mt-56 text-white gap-y-0 md:ml-28 xl:ml-0">

          <div className="h-[180px] lg:h-[273px] md:w-[264px]">
            <h4 className="text-2xl font-bold">Karachi</h4>
            <h5 className="text-lg relative">
              Clifton Block 5
              <span className="absolute left-0 bottom-[-4px] w-[60px] h-[3px] bg-pink-800"></span>
            </h5>
            <p className="pt-2">75000 Karachi</p>
            <p>Phone:021-7654321</p>
            <p>Fax:021-7654321</p>
          </div>

          <div className="h-[180px] lg:h-[273px] md:w-[264px]">
            <h4 className="text-2xl font-bold">Lahore</h4>
            <h5 className="text-lg relative">
              DHA Phase 6
              <span className="absolute left-0 bottom-[-4px] w-[60px] h-[3px] bg-pink-800"></span>
            </h5>
            <p className="pt-2">54000 Lahore</p>
            <p>Phone:042-9876543</p>
            <p>Fax:042-9876543</p>
          </div>

          <div className="h-[180px] lg:h-[273px] md:w-[264px]">
            <h4 className="text-2xl font-bold">Islamabad</h4>
            <h5 className="text-lg relative">
              DHA Phase 2
              <span className="absolute left-0 bottom-[-4px] w-[60px] h-[3px] bg-pink-800"></span>
            </h5>
            <p className="pt-2">44000 Islamabad</p>
            <p>Phone:051-1122333</p>
            <p>Fax:051-112233</p>
          </div>

          <div className="h-[180px] lg:h-[273px] md:w-[264px]">
            <h4 className="text-2xl font-bold">Faisalabad</h4>
            <h5 className="text-lg relative">
              Eden Valley
              <span className="absolute left-0 bottom-[-4px] w-[60px] h-[3px] bg-pink-800"></span>
            </h5>
            <p className="pt-2">38000 Faisalabad</p>
            <p>Phone:041-3344556</p>
            <p>Fax:041-3344556</p>
          </div>

        </div>
      </div>
    </section>
  );
}
