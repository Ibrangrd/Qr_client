import { LOGO_IMG } from "../utils";
const NavLogo = () => {
  return (
    <div className="flex">
      <img src={LOGO_IMG} className="h-10 w-12" alt="QR  Logo" />
      <span className="self-center text-3xl font-semibold whitespace-nowrap text-[#d5a149] font-mofeital dark:text-white">
        QR WEDS
      </span>
    </div>
  );
};

export default NavLogo;