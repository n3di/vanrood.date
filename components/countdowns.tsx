import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import relativeTime from "dayjs/plugin/relativeTime";
import preciseDiff from "dayjs-precise-range";

const Countdowns = () => {
  dayjs.extend(utc);
  dayjs.extend(relativeTime);
  dayjs.extend(preciseDiff);

  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const LastStream = () => {
    const lastStream = dayjs("2024-01-18T21:07:00.000Z");

    setInterval(() => {
      const currentTime = dayjs();
      const elapsedTime = dayjs.preciseDiff(lastStream, currentTime, true);

      const years = elapsedTime["years"];
      const months = elapsedTime["months"];
      const days = elapsedTime["days"];
      const hours = elapsedTime["hours"];
      const minutes = elapsedTime["minutes"];
      const seconds = elapsedTime["seconds"];

      setYears(years);
      setMonths(months);
      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    });
  };

  useEffect(() => {
    LastStream();
  });

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
          <span>{years} LATA</span>
          <span>{months} MIESIĄCE</span>
          <span>{days} DNI</span>
          <span>{hours} GODZINY</span>
          <span>{minutes} MINUTY</span>
          <span>{seconds} SEKUNDY</span>
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
