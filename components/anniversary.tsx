import React from "react";

const Anniversary = ({
  timerYears: number,
  timerMonths: number,
  timerDays: number,
  timerHours: number,
  timerMinutes: number,
  timerSeconds: number,
}) => {
  return (
    <div className="w-full my-6">
      <div className="mb-4 w-full flex justify-center items-center">
        <div className="decoration-l"></div>
        <h1 className="mx-6 text-xl bg-gradient-to-b from-[#dae9f2] to-[#adcde2] bg-clip-text text-transparent">
          {timerYears}
        </h1>
        <div className="decoration-r"></div>
      </div>
      <div className="border border-[#60512b] rounded-md p-1">
        <div className="[&>*:not(:last-child)]:border-[#3e423c] [&>*:not(:last-child)]:border-r [&>*]:flex-1 relative h-[90px] w-full flex items-center text-center leading-6 bg-[url('/images/time.png')] bg-no-repeat bg-[length:100%_100%] bg-center">
          <div className="block">
            <div className="bg-gradient-to-b from-[#ffe98d] to-[#e19f27] bg-clip-text text-transparent text-4xl">
              {timerMonths}
            </div>
            <div className="text-[0.7rem] font-['Noto_Sans'] font-normal uppercase text-[#a17831]">
              Miesiące
            </div>
          </div>
          <div className="block">
            <div className="bg-gradient-to-b from-[#ffe98d] to-[#e19f27] bg-clip-text text-transparent text-4xl">
              {timerDays}
            </div>
            <div className="text-[0.7rem] font-['Noto_Sans'] font-normal uppercase text-[#a17831]">
              Dni
            </div>
          </div>
          <div className="block">
            <div className="bg-gradient-to-b from-[#ffe98d] to-[#e19f27] bg-clip-text text-transparent text-4xl">
              {timerHours}
            </div>
            <div className="text-[0.7rem] font-['Noto_Sans'] font-normal uppercase text-[#a17831]">
              Godziny
            </div>
          </div>
          <div className="block">
            <div className="bg-gradient-to-b from-[#ffe98d] to-[#e19f27] bg-clip-text text-transparent text-4xl">
              {timerMinutes}
            </div>
            <div className="text-[0.7rem] font-['Noto_Sans'] font-normal uppercase text-[#a17831]">
              Minuty
            </div>
          </div>
          <div className="block">
            <div className="bg-gradient-to-b from-[#ffe98d] to-[#e19f27] bg-clip-text text-transparent text-4xl">
              {timerSeconds}
            </div>
            <div className="text-[0.7rem] font-['Noto_Sans'] font-normal uppercase text-[#a17831]">
              Sekundy
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Anniversary;
