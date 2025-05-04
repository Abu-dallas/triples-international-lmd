import { useState, useEffect, useRef } from "react";

const Counter = ({ target, duration }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const observer = useRef(null);

  useEffect(() => {
    const startCounting = () => {
      let start = 0;
      const increment = target / (duration / 20); // Adjust speed
      const interval = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(interval);
        } else {
          setCount(Math.ceil(start));
        }
      }, 20);
    };

    observer.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCounting();
          observer.current.disconnect(); // Stop observing after animation
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.current.observe(ref.current);

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [target, duration]);

  return (
    <div ref={ref} className="text-4xl font-bold text-indigo-400">
      {count}
      <span className=" text-3xl text-white">+</span>
    </div>
  );
};

const StatsSection = () => {
  return (
    <div className=" w-full bg-black lg:flex lg:items-center lg:justify-center text-center py-18">
      <div className="lg:w-[70%] grid p-4 grid-cols-2 md:grid-cols-3 lg:items-center lg:justify-center gap-6">
        <div className="p-6 bg-black/95 border border-slate-800 rounded-3xl">
          <h2 className="text-2xl text-slate-50">Countries</h2>
          <Counter target={35} duration={3000} />
        </div>
        <div className="p-6 bg-black/95 border border-slate-800 rounded-3xl">
          <h2 className="text-2xl text-slate-50">Customers</h2>
          <Counter target={100} duration={3000} />
        </div>
        <div className="p-6 bg-black/95 border border-slate-800 rounded-3xl">
          <h2 className="text-2xl text-slate-50">Products</h2>
          <Counter target={50} duration={3000} />
        </div>
        <div className="p-6 bg-black/95 border border-slate-800 rounded-3xl">
          <h2 className="text-2xl text-slate-50">Delivery</h2>
          <Counter target={1700} duration={3000} />
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
