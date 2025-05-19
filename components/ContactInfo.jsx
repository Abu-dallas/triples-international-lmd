import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

function ContactInfo() {
  return (
    <div className="w-full bg-black py-8">
      <div className="py-6 w-full px-4 bg-black flex flex-col lg:pl-50  gap-2">
        <p className="text-2xl text-indigo-500 font-bold pt-8">
          Contact Us Now
        </p>
        <p className="flex gap-4 items-center mt-5">
          <span className="p-2 bg-slate-800/35 rounded-full">
            <Phone className="text-slate-200 w-6 h-6" />
          </span>

          <a className="text-md text-slate-200 " href="tel:2347083046011">
            +234 7083046011
          </a>
        </p>
        <p className="flex gap-4 items-center mt-1">
          <span className="p-2 bg-slate-800/35 rounded-full">
            <Phone className="text-slate-200 w-6 h-6" />
          </span>

          <a className="text-md text-slate-200 " href="tel:2348136783030">
            +234 8136783030
          </a>
        </p>
        <p className="flex gap-4 items-center mt-1">
          <span className="p-2 bg-slate-800/35 rounded-full">
            <Phone className="text-slate-200 w-6 h-6" />
          </span>

          <a className="text-md text-slate-200 " href="tel:2348065463076">
            +234 8065463076
          </a>
        </p>
        <p className="flex gap-4 items-center">
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
        <p className="flex gap-4 ">
          <span className="p-2 bg-slate-800/35 rounded-full w-15 h-10 lg:w-9">
            <MapPin className="text-slate-200 w-6 h-6" />
          </span>
          <span className="text-md text-slate-200 ">
            Eastly Park Plaza, Plot No. 5 Bathurst Street, Of Aminu Kano
            Cresent, Wuse II, Abuja, Nigeria.{" "}
          </span>
        </p>
      </div>
      <div className="w-full h-[500px] md:h-[600px] px-1 mt-8 mb-50">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d62447.20805368358!2d8.49894244511581!3d11.977926857571566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1shassan%20gwarzo%20street%20gandun%20albasa!5e0!3m2!1sen!2sng!4v1747684539592!5m2!1sen!2sng"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0 rounded-md"
        />
      </div>
    </div>
  );
}

export default ContactInfo;
