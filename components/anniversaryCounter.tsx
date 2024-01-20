import React, { useEffect, useState } from "react";
import AnniversaryTitle from "./anniversaryTitle";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import relativeTime from "dayjs/plugin/relativeTime";
import preciseDiff from "dayjs-precise-range";

const Anniversary = () => {
  dayjs.extend(utc);
  dayjs.extend(relativeTime);
  dayjs.extend(preciseDiff);

  const [months, setMonths] = useState("0");
  const [days, setDays] = useState("0");
  const [hours, setHours] = useState("0");
  const [minutes, setMinutes] = useState("0");
  const [seconds, setSeconds] = useState("0");

  const AnniversaryCounter = () => {
    const lastStream = dayjs("2024-01-18T21:07:00.000Z");

    setInterval(() => {
      const currentTime = dayjs();
      const anniversaryDate = lastStream.year(
        currentTime.add(1, "year").year()
      );
      const elapsedTime = dayjs.preciseDiff(currentTime, anniversaryDate, true);

      const months = elapsedTime["months"].toString().padStart(2, "0");
      const days = elapsedTime["days"].toString().padStart(2, "0");
      const hours = elapsedTime["hours"].toString().padStart(2, "0");
      const minutes = elapsedTime["minutes"].toString().padStart(2, "0");
      const seconds = elapsedTime["seconds"].toString().padStart(2, "0");

      setMonths(months);
      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    });
  };

  useEffect(() => {
    AnniversaryCounter();
  });

  return (
    <div className="w-full my-6">
      <AnniversaryTitle />
      <div className="border border-[#60512b] rounded-md p-1">
        <div className="[&>*:not(:last-child)]:border-[#3e423c] [&>*:not(:last-child)]:border-r [&>*]:flex-1 relative h-[90px] w-full flex items-center text-center leading-6 bg-[url('/images/time.png')] bg-no-repeat bg-[length:100%_100%] bg-center">
          <div className="block">
            <div className="bg-gradient-to-b from-[#ffe98d] to-[#e19f27] bg-clip-text text-transparent text-4xl">
              {months}
            </div>
            <div className="text-[0.7rem] font-['Noto_Sans'] font-normal uppercase text-[#a17831]">
              Miesiące
            </div>
          </div>
          <div className="block">
            <div className="bg-gradient-to-b from-[#ffe98d] to-[#e19f27] bg-clip-text text-transparent text-4xl">
              {days}
            </div>
            <div className="text-[0.7rem] font-['Noto_Sans'] font-normal uppercase text-[#a17831]">
              Dni
            </div>
          </div>
          <div className="block">
            <div className="bg-gradient-to-b from-[#ffe98d] to-[#e19f27] bg-clip-text text-transparent text-4xl">
              {hours}
            </div>
            <div className="text-[0.7rem] font-['Noto_Sans'] font-normal uppercase text-[#a17831]">
              Godziny
            </div>
          </div>
          <div className="block">
            <div className="bg-gradient-to-b from-[#ffe98d] to-[#e19f27] bg-clip-text text-transparent text-4xl">
              {minutes}
            </div>
            <div className="text-[0.7rem] font-['Noto_Sans'] font-normal uppercase text-[#a17831]">
              Minuty
            </div>
          </div>
          <div className="block">
            <div className="bg-gradient-to-b from-[#ffe98d] to-[#e19f27] bg-clip-text text-transparent text-4xl">
              {seconds}
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
