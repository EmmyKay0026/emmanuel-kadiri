"use client";
import { awardsCertificateConstant } from "@/constants/awardsCertification";
import JourneySoFarMobCard from "../atoms/JourneySoFarMobCard";
import { AwardCertificate } from "@/types";

const JourneySoFarMob = () => {
  return (
    <div className="relative dh-[600vh] lg:hidden">
      {/* <div
        className="ssticky top-0 flex h-full w-max flex-col gap-[70px] "
        // style={{ x: xTranslate }}
      > */}
      {/* <div className={`w-[calc(100vw-var(--${containerDistance}))]`} /> */}
      <div className="overflow-x-scroll overflow-y-clip pl-[20px] md:pl-[50px] lg:pl-[70px]  scrollbar-hide">
        <div
          className="flex space-x-3 md:gap-[10px] pr-6 mt-5 lg:gap-[30px] lg:mt-10"
          style={{ width: "max-content" }}
        >
          {awardsCertificateConstant.map((item: AwardCertificate) => (
            <JourneySoFarMobCard
              img={item.img}
              title={item.title}
              desc={item.desc}
              link={item.link}
              date={item.date}
              key={item.id}
            />
          ))}
        </div>
      </div>
      {/* <div className="sticky bottom-[20%] left-0 w-20 h-20">
        <svg width="100%" height="100%" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#ddd"
            strokeWidth={20}
          />
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#dd4c62"
            strokeWidth={20}
            style={{ pathLength: scrollYProgress }}
            transform="rotate(-90 80 80)"
          />
        </svg> 
      </div>*/}
    </div>
  );
};

export default JourneySoFarMob;
