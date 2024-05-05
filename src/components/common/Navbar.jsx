import airUw from "/logo6.svg";

export const Navbar = () => {
  return (
    <>
      <div className="bg-[#0F0F0F] fixed w-screen py-3 flex justify-row justify-center shadow-md z-10">
        <img src={airUw} className="px-7 gray-400"></img>
        <div className="flex ml-4 justify-center text-lg">
          <ul className="justify-row flex items-center text-gray-300">
            <li className="px-7 hover:text-white">Mission</li>
            <li className="px-7 hover:text-white">Risks</li>
            <li className="px-7 hover:text-white">FAQ</li>
            <li className="px-7 hover:text-white">News</li>
          </ul>
        </div>
      </div>
    </>
  );
};
