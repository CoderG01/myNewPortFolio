import { useNavigate } from "react-router-dom";
import "../css/navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const menuList: MenuListTypes[] = [
    {
      id: 1,
      name: "about",
      path: "me",
    },
    {
      id: 3,
      name: "contact",
      path: "contact",
    },
  ];
  return (
    <nav className="h-[30px py-4 w-[90%] md:w-[70%] mx-auto font-inter flex items-center justify-between fixed left-[50%] top-0 -translate-x-[50%] -translate-y-0 z-10">
      <div className="w-[50px] md:w-[70px] h-[50px] md:h-[70px] border-[1px] border-mainBg rounded-full flex justify-center items-center bg-mainBg relative group cursor-pointer" onClick={() => {
        window.location.reload();
        navigate('/')
      }}>
        <img
          src="./avatar.png"
          alt="avatar image"
          className="w-[87%] rounded-full group-hover:w-full transition-[0.5] absolute top-0 left-0"
        />
      </div>
      <div className="flex gap-20 justify-center items-center">
        <ul className="flex gap-6">
          {menuList?.map((data: MenuListTypes) => {
            return (
              <li
                onClick={() => navigate(data?.path)}
                key={data?.id}
                className="text-[18px] cursor-pointer NavListItem relative text-[#676767] hover:text-mainBg transition-[0.4] capitalize"
              >
                {data?.name}
              </li>
            );
          })}
        </ul>
        <button className="w-[125px] h-[43px] bg-mainBg rounded-[18px] capitalize text-[16px] text-white border-[1px] border-black hover:bg-white hover:text-mainBg transition-[0.4]">
          let's talk
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
