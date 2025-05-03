import Image from "next/image";

type TestionialCardsProp = {
  imgg: string;
  h4Name: string;
  spanCont: string;
  pCont: string;
};
export const TestionialCards = ({
  imgg,
  h4Name,
  spanCont,
  pCont,
}: TestionialCardsProp) => {
  return (
    <div className="bg-accent dark:bg-secondary rounded-[7px] px-[9%] py-[18%] mb-[30px] ">
      <div className="card-top-part flex items-center">
        <div className="card-img-cont h-[80px] w-[80px]  mr-[20px]">
          <Image
            className="rounded-full w-full border-[1px] border-solid border-primaryGreen dark:border-[#000000]"
            src={imgg}
            alt=""
            width={90}
            height={90}
          />
        </div>
        <div className="card-name m-0 ">
          <h4 className="text-[1.3rem] text-black dark:text-white font-bold">
            {h4Name}
          </h4>
          <span className="text-[.8rem] italic text-secondary dark:text-accent">
            {spanCont}{" "}
          </span>
        </div>
      </div>
      <div className="card-bott-part mt-5 text-secondary dark:text-accent ">
        <p>{pCont}</p>
      </div>
    </div>
  );
};
