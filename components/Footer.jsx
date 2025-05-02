import Image from "next/image";

function Footer() {
  return (
    <div className="py-6 bg-black/90 ">
      <p className="text-center text-2xl font-bold text-slate-100 pt-6 pb-4">
        Tripple 's' International
      </p>
      <div className="py-6 w-full px-4 flex flex-col  gap-2">
        <p className="text-xl text-indigo-500 font-bold pt-8">Head Office</p>

        <p className="flex gap-4 ">
          <span className="p-2 bg-slate-800/35 rounded-full w-15 h-10 lg:w-9">
            <Image
              src="/menu.png"
              alt="tripples"
              width={2000}
              height={2000}
              className="w-5 rounded-sm h-5"
            />
          </span>
          <span className="text-md text-slate-200 ">
            Eastly Park Plaza, Plot No. 5 Bathurst Street, Of Aminu Kano
            Cresent, Wuse II, Abuja, Nigeria.{" "}
          </span>
        </p>
        <p className="text-xl text-indigo-500 font-bold pt-8">Branch</p>
        <p className="flex gap-4 ">
          <span className="p-2 bg-slate-800/35 rounded-full w-15 h-10 lg:w-9">
            <Image
              src="/menu.png"
              alt="tripples"
              width={2000}
              height={2000}
              className="w-5 rounded-sm h-5"
            />
          </span>
          <span className="text-md text-slate-200 ">
            Suite 14 & 14, Bank Road, Opposite Former Nigerian Airways Office,
            Kano, Nigeria.
          </span>
        </p>
        <div className="py-6 w-full flex-col  gap-2">
          <p className="text-xl text-indigo-500 font-bold pt-3">Contact Info</p>

          <p className="flex gap-4 items-center mt-5">
            <span className="p-2 bg-slate-800/35 rounded-full">
              <Image
                src="/menu.png"
                alt="tripples"
                width={2000}
                height={2000}
                className="w-5 rounded-sm h-5"
              />
            </span>

            <a className="text-md text-slate-200 " href="tel:2348030420079">
              +234 8022222222
            </a>
          </p>
          <p className="flex gap-4 items-center">
            <span className="p-2 bg-slate-800/35 rounded-full">
              <Image
                src="/menu.png"
                alt="tripples"
                width={2000}
                height={2000}
                className="w-5 rounded-sm h-5"
              />
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
        <Image
          src="/triples/whatsapp.png"
          alt="tripples"
          width={2000}
          height={2000}
          className="w-8 rounded-sm h-8"
        />
        <Image
          src="/triples/facebook.png"
          alt="tripples"
          width={2000}
          height={2000}
          className="w-8 rounded-sm h-8"
        />
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
