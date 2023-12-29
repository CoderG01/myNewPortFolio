import React from "react";

interface TitleTypes {
  title: string;
  subTitle: string;
}

const TitleText = ({ title, subTitle }: TitleTypes) => {
  return (
    <>
      <p className="px-4 pt-4 mt-8 text-[16px] text-[gray]">{title}</p>
      <p className="ps-4 text-[20px] text-mainBg">{subTitle}</p>
    </>
  );
};

export default TitleText;
