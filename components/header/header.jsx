import { ChevronDown } from "lucide-react";
import { Profile } from "../profile";
import { UiButton } from "../uikit/ui-button";
import { Logo } from "./logo";
export function Header() {
  return (
    <header className="flex h-24 items-center px-8 bg-white shadow-lg justify-between">
      <div className="flex items-center">
        <Logo />
        <div className="w-px h-8 bg-slate-300 mx-6"></div>
        <UiButton className="w-44" size="lg" variant="primary">
          Играть
        </UiButton>
      </div>
      <button className="ml-auto flex items-center gap-2 text-start text-teal-600 ">
        <Profile name="DmitryKotl" rating="125" />
        <ChevronDown className="  h-6 w-6" />
      </button>
    </header>
  );
}
