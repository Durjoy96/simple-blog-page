import UserPfp from "../../assets/pfp/User-pfp.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4 md:py-6 border-b">
      <h1 className="text-2xl font-bold text-base-content md:text-4xl">
        Knowledge Cafe
      </h1>
      <div className="w-8 h-8 md:w-12 md:h-12">
        <img className="w-full h-full rounded-full" src={UserPfp} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
