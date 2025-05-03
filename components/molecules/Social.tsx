import Image from "next/image";
import React from "react";

export const Social = () => {
  return (
    <>
      <div className="flex items-center gap-[10px]">
        <a target="_blank" href="https://www.linkedin.com/in/kadiri-o-emmanuel">
          <Image
            width={40}
            height={40}
            className="btn saturate-0 hover:saturate-100"
            src={"/images/linkedin.png"}
            alt="linkedin-icon"
          />
        </a>
        <a
          target="_blank"
          href=" https://instagram.com/kadiri___emmanuel?igshid=OGY3MTU3OGY1Mw=="
        >
          <Image
            width={40}
            height={40}
            className="btn saturate-0 hover:saturate-100"
            src={"/images/instagram.png"}
            alt="instagram-icon"
          />
        </a>{" "}
        <a
          target="_blank"
          href="https://twitter.com/emmykay26?t=d39-vq4gUlYRiBrAZCXiLw&s=09"
        >
          <Image
            width={40}
            height={40}
            className="btn saturate-0 hover:saturate-100"
            src={"/images/x.png"}
            alt="twitter-icon"
          />
        </a>{" "}
        <a target="_blank" href="https://github.com/EmmyKay0026">
          <Image
            width={40}
            height={40}
            className="btn saturate-0 hover:saturate-100"
            src={"/images/github.png"}
            alt="git hub icon"
          />
        </a>{" "}
        <a
          target="_blank"
          className="w-[40px]"
          href="https://github.com/EmmyKay0026"
        >
          <Image
            width={40}
            height={40}
            className="btn w-full saturate-0 hover:saturate-100"
            src={"/images/whatsapp.png"}
            alt="whatsapp icon"
          />
        </a>{" "}
      </div>
    </>
  );
};
