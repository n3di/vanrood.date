import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import relativeTime from "dayjs/plugin/relativeTime";
import preciseDiff from "dayjs-precise-range";

const AnniversaryTitle = () => {
  dayjs.extend(utc);
  dayjs.extend(relativeTime);
  dayjs.extend(preciseDiff);

  const [years, setYears] = useState("0");

  const AnniversaryYearsTitle = () => {
    const lastStream = dayjs("2024-01-18T21:07:00.000Z");

    setInterval(() => {
      const currentTime = dayjs();
      const elapsedTime = dayjs.preciseDiff(lastStream, currentTime, true);

      const years =
        elapsedTime["years"] < 1
          ? "Rocznica bez streama"
          : elapsedTime["years"] + 1 + " Rocznica bez streama";

      setYears(years);
    });
  };

  useEffect(() => {
    AnniversaryYearsTitle();
  });

  return (
    <div className="mb-4 w-full flex justify-center items-center">
      <div className="decoration-l"></div>
      <h1 className="mx-6 text-xl bg-gradient-to-b from-[#dae9f2] to-[#adcde2] bg-clip-text text-transparent">
        {years}
      </h1>
      <div className="decoration-r"></div>
    </div>
  );
};

export default AnniversaryTitle;
