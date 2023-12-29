import { GiFastArrow } from "react-icons/gi";

interface BtnTypes {
  classNames: string;
}

const ArrowButton = ({ classNames }: BtnTypes) => {
  return (
    <button className={`rotate-[-45deg] ${classNames}`}>
      <GiFastArrow className="text-[30px]" />
    </button>
  );
};

export default ArrowButton;
