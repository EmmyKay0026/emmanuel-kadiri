// import { Link } from "react-router-dom";

import Link from "next/link";

const Menu = () => {
  return (
    <section
      style={{ backdropFilter: "blur(12px)" }}
      className="fixed top-0 flex items-center justify-center dark:bg-black bg-white  blur__bg    opacity-90 back-filter h-screen w-screen z-[998] px-[20px] md:px-[50px] lg:px-[70px] py-[15px] md:hidden"
    >
      <div className="">
        <h3 className=" text-secondary dark:text-accent  font-source text-[2rem] md:textp-[3.2rem] lg:text-[4rem]">
          Learn more{" "}
          <Link
            className={
              "btn  underline text-black dark:text-white cursor-pointer "
            }
            href={"#"}
          >
            about me
          </Link>
          , check out{" "}
          <Link
            className={
              "btn  underline text-black dark:text-white cursor-pointer "
            }
            href={"#"}
          >
            {" "}
            my works
          </Link>
          , the latest on{" "}
          <a
            href=""
            className={
              " btn underline text-black dark:text-white cursor-pointer "
            }
          >
            {" "}
            Instagram
          </a>
          , and{" "}
          <Link
            className={
              "btn  underline text-black dark:text-white cursor-pointer "
            }
            href={"#"}
          >
            contact me
          </Link>
          .
        </h3>
      </div>
    </section>
  );
};

export default Menu;
