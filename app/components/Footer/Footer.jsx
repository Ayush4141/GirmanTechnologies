import { FaInstagram, FaTelegram, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="h-1/5 pl-12 bg-[#C8E1FF] flex flex-row text-black py-4">
      <div className="w-1/3 h-full pl-12">
        <h2 className="text-[#0075FF] mb-2">Contact</h2>
        <div className="text-gray-700 text-sm">
          <p className="py-1">7760560137, 8123259095</p>
          <p className="">girish@girmantech.com</p>
          <p>manish@girmantech.com</p>
          <p className="mt-4 text-xs text-gray-500">© 2024 — Copyright</p>
        </div>
      </div>
      <div className="w-1/3 h-full px-8 ml-12">
        <h2 className="text-[#0075FF] mb-2 pb-2"> Follow Us</h2>
        <div className="flex flex-row">
          <div className="flex flex-col w-12 h-12 bg-transparent rounded-full border-[1px] border-slate-400 mx-2 flex justify-center items-center">
            <FaInstagram size={24}/>
          </div>
          <div className="flex flex-col w-12 h-12 bg-transparent rounded-full border-[1px] border-slate-400 mx-2 flex justify-center items-center">
            <FaWhatsapp size={24}/>
          </div>
          <div className="flex flex-col w-12 h-12 bg-transparent rounded-full border-[1px] border-slate-400 mx-2 flex justify-center items-center">
          <FaTelegramPlane size={24}/>
          </div>
        </div>
        <div>
            <p className="mt-6 pt-1 text-xs text-gray-500">Girman Technologies Pvt. Ltd.</p>
        </div>
      </div>
      <div className="w-1/3 h-full pl-8 relative">
        <p className="mt-6 pt-1 text-xs text-gray-500 absolute bottom-0 right-24">All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
