import airUw from "/logo6.svg";

export const Navbar = () => {
  return (
    <>
      <div className="bg-[#0F0F0F] fixed w-screen py-3 flex justify-row justify-center shadow-md">
        <img src={airUw} className="px-4"></img>
        <div className="flex ml-4 justify-center">
          <ul className="justify-row flex items-center">
            <li className="px-4">Mission</li>
            <li className="px-4">About</li>
            <li className="px-4">Risks</li>
            <li className="px-4">FAQ</li>
            <li className="px-4">News</li>
          </ul>
        </div>
      </div>
    </>
  );
};
