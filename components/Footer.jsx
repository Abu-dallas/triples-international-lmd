import { Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Image from "next/image";

function Footer() {
  return (
    <div className="py-6 bg-black/90">
      <p className="text-center text-2xl font-bold text-slate-100 pt-6 pb-4">
        Tripple 's' International
      </p>
      <div className="py-6 w-full px-4 flex flex-col  gap-2  lg:flex-row lg:items-center lg:justify-between lg:gap-20 lg:pl-20">
        <div className="pb-4 w-full flex-col flex  gap-4">
          <p className="text-xl text-indigo-500 font-bold pt-8">Head Office</p>
          <p className="flex gap-4 ">
            <span className="p-2 bg-slate-800/35 rounded-full w-15 h-10 lg:w-9">
              <MapPin className="text-slate-200 w-6 h-6" />
            </span>
            <span className="text-md text-slate-200 ">
              No 79, Hassan Kwarzo Street, Gandun Albasa Kano, Nigeria.
            </span>
          </p>
        </div>

        <div className="py-2 w-full flex-col  gap-2">
          <p className="text-xl text-indigo-500 font-bold pt-3">Contact Info</p>

          <p className="flex gap-4 items-center mt-5">
            <span className="p-2 bg-slate-800/35 rounded-full">
              <Phone className="text-slate-200 w-6 h-6" />
            </span>

            <a className="text-md text-slate-200 " href="tel:2347083046011">
              +234 7083046011
            </a>
          </p>
          <p className="flex gap-4 items-center mt-5">
            <span className="p-2 bg-slate-800/35 rounded-full">
              <Phone className="text-slate-200 w-6 h-6" />
            </span>

            <a className="text-md text-slate-200 " href="tel:2348136783030">
              +234 8136783030
            </a>
          </p>
          <p className="flex gap-4 items-center mt-5">
            <span className="p-2 bg-slate-800/35 rounded-full">
              <Phone className="text-slate-200 w-6 h-6" />
            </span>

            <a className="text-md text-slate-200 " href="tel:2348065463076">
              +234 8065463076
            </a>
          </p>
          <p className="flex gap-4 items-center pt-5">
            <span className="p-2 bg-slate-800/35 rounded-full">
              <Mail className="text-slate-200 w-6 h-6" />
            </span>
            <a
              className="text-md text-slate-200 "
              href="mailto:blogger@gmail.com"
            >
              tripples@gmail.com
            </a>
          </p>
        </div>
      </div>
      <div className="flex items-center gap-8 justify-center mt-12 pb-8">
        <Image
          src="/triples/facebook.png"
          alt="tripples"
          width={2000}
          height={2000}
          className="w-8 rounded-sm h-8"
        />
        <Instagram className="w-8 text-yellow-800 rounded-sm h-8" />
        <Twitter className="w-8 text-blue-800 rounded-sm h-8" />
        <Image
          src="/triples/whatsapp.png"
          alt="tripples"
          width={2000}
          height={2000}
          className="w-8 rounded-sm h-8"
        />
      </div>
    </div>
  );
}

export default Footer;
