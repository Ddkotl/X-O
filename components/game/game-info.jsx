import clsx from "clsx";
import { Circle, X } from "lucide-react";
import { Profile } from "../profile";

export function GameInfo({ className }) {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 py-4 flex justify-between",
      )}
    >
      <div className="flex gap-3 items-center">
        <div className="relative">
          <Profile />
          <div className="w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center">
            <X className="h-4 w-4 text-orange-600" />
          </div>
        </div>
        <div className="w-px h-8 bg-slate-300 "></div>
        <div className="text-slate-900 text-lg font-semibold">01:08</div>
      </div>
      <div className="flex gap-3 items-center">
        <div className="text-orange-600 text-lg font-semibold">00:12</div>
        <div className="w-px h-8 bg-slate-300 "></div>
        <div className="relative">
          <Profile />
          <div className="w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center">
            <Circle className="h-4 w-4 text-teal-600" />
          </div>
        </div>
      </div>
    </div>
  );
}
