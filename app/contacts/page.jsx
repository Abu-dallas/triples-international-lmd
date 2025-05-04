"use client";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

function page() {
  const [isOpen, setisOpen] = useState(false);

  return (
    <div className="bg-black w-full">
      <NavBar setisOpen={setisOpen} />
      <SideBar isOpen={isOpen} setisOpen={setisOpen} />
      <div className="w-full  lg:flex lg:items-center lg:justify-center lg:flex-col">
        <div className="w-full lg:w-[80%] pt-20 px-2">
          <div className="w-full">
            <p className="text-3xl text-indigo-500 font-bold mb-3 px-2">
              Contact Us through
            </p>
            <p className="text-slate-200 px-2 lg:w-[60%]">
              Our dedicated support center help to facilitate communication with
              our customers, if you need any help or question feel free to
              communicate with us through the following ways. we are available
              to help 24/7.
            </p>
          </div>
          <div className="w-full relative h-[400px] mt-20">
            <Image
              src="/triples/vegetablebg.jpg"
              alt="tripples international limited image"
              width={2000}
              height={2000}
              className="w-full h-full rounded-md"
            />
            <div className="absolute top-0 rounded-md px-4 w-full h-full bg-black/65 flex flex-col justify-center">
              <p className="text-xl text-indigo-500 font-bold ml-2">
                Contact Us Now
              </p>

              <p className="flex gap-4 items-center mt-5">
                <span className="p-2 bg-slate-800/35 rounded-full">
                  <Phone className="text-slate-200 w-6 h-6" />
                </span>

                <a className="text-md text-slate-200 " href="tel:2348030420079">
                  +234 8022222222
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
              <p className="flex gap-4 mt-2">
                <span className="p-2 bg-slate-800/35 rounded-full w-15 h-10 lg:w-9">
                  <MapPin className="text-slate-200 w-6 h-6" />
                </span>
                <span className="text-md text-slate-200 ">
                  Suite 14 & 14, Bank Road, Opposite Former Nigerian Airways
                  Office, Kano, Nigeria.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-ful lg:w-[80%] h-[500px] md:h-[600px] px-1 lg:mx-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.829581380961!2d7.459215173753195!3d9.079284988202387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0ae7c628885d%3A0x4ec4810158046ef0!2sEastly%20shopping%20plaza!5e0!3m2!1sen!2sng!4v1746200398607!5m2!1sen!2sng"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0 rounded-md"
        />
      </div>
      <div className="w-full pt-12 lg:w-[80%] mx-auto">
        <p className="text-slate-200 mt-12 px-4 font-bold">
          You can altenatively reach us by filling the form below with your
          correct information.
        </p>
        <form className="w-full md:w-[70%] flex flex-col gap-4 px-4 mt-6 ">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="Name" className="text-slate-200 text-lg">
              Name
            </label>
            <input
              type="text"
              placeholder="enter your full name"
              className="outline-none text-slate-300 p-2.5 px-4 rounded bg-slate-800/70 w-full placeholder:text-slate-400"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="Name" className="text-slate-200 text-lg">
              Email Address
            </label>
            <input
              type="text"
              placeholder="enter your email address"
              className="outline-none text-slate-300 p-2.5 px-4 rounded bg-slate-800/70 w-full placeholder:text-slate-400"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="Name" className="text-slate-200 text-lg">
              Message
            </label>
            <textarea
              rows={3}
              type="text"
              placeholder="enter your full name"
              className="outline-none text-slate-300 py-3 px-4 resize-none rounded bg-slate-800/70 w-full placeholder:text-slate-400"
            />
          </div>
          <div className="w-full mt-4">
            <button
              type="submit"
              className="w-full bg-indigo-700 hover:bg-indigo-800 font-bold p-3 rounded text-slate-200"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      <div className="bg-white w-full mt-50">
        <Footer />
      </div>
    </div>
  );
}

export default page;
