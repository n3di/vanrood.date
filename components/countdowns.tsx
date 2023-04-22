import React from "react";

const Countdowns = ({
  timerYears,
  timerMonths,
  timerDays,
  timerHours,
  timerMinutes,
  timerSeconds,
}: any) => {
  return (
    <div className="shadow-[0_4px_30px_rgba(0,0,0,0.5),inset_0_0_0_2px_#4e5765] relative py-[10px] px-[30px] bg-[#0e1726]/[.7] w-full border-2 border-[#15243a] flex justify-center text-center flex-col before:content-[''] backdrop-blur-md before:inset-0 before:absolute before:bg-no-repeat before:bg-corner-image before:bg-corner-position pointer-events-none">
      <h1 className="text-3xl bg-gradient-to-b from-[#ffe98d] to-[#e19f27] bg-clip-text text-transparent">
        LICZNIKI
      </h1>
      <hr />
      <div>
        <h3 className="text-[19px] bg-gradient-to-b from-[#dae9f2] to-[#adcde2] bg-clip-text text-transparent">
          Czas od ostatniego streama
        </h3>
        <h4 className="font-['Noto_Sans'] text-[#ddd] [&>*:not(:last-child)]:after:content-[',_']">
          {timerYears <= 0 ? "" : <span>{timerYears} LATA</span>}

          {timerMonths <= 0 ? "" : <span>{timerMonths} MIESIĄCE</span>}

          {timerDays <= 0 ? "" : <span>{timerDays} DNI</span>}

          {timerHours <= 0 ? "" : <span>{timerHours} GODZINY</span>}

          {timerMinutes <= 0 ? "" : <span>{timerMinutes} MINUTY</span>}
          <span>{timerSeconds} SEKUNDY</span>
        </h4>
      </div>
      <hr />
      <em className="font-normal font-['Noto_Sans'] text-[#b7cedd]">
        Data następnego streama jest wciąż nieznana
      </em>
    </div>
  );
};

export default Countdowns;
