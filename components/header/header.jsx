import { ChevronDown } from "lucide-react";
import Image from "next/image";
import avatarSrc from "./avatar.jpg";
import { Logo } from "./logo";
export function Header() {
  return (
    <header className="flex h-24 items-center px-8 bg-white shadow-lg justify-between">
      <div className="flex items-center">
        <Logo />
        <div className="w-px h-8 bg-slate-300 mx-6"></div>
        <button className=" w-44 bg-teal-600 text-white rounded-lg px-5 py-2 text-xl hover:bg-teal-500 transition-colors">
          Играть
        </button>
      </div>

      <button className="ml-auto flex items-center gap-2 text-start text-teal-600 hover:text-teal-500 transition-colors ">
        <Image src={avatarSrc} alt="avatar" className="h-12 w-12" />
        <div>
          <div className="  text-lg">DmitryKotl</div>
          <div className=" text-slate-400 text-xs">Рейтинг: 2342</div>
        </div>
        <ChevronDown className="  h-6 w-6" />
      </button>
    </header>
  );
}
