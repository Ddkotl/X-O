import { ArrowLeft, History, StarIcon, UserRound } from "lucide-react";
import Link from "next/link";

export function GameTitle() {
  return (
    <div className="pl-2">
      <Link
        href="#"
        className="flex items-center gap-2 text-teal-600 hover:text-teal-400 transition-colors -mb-0.5"
      >
        <ArrowLeft className="  h-5 w-5 " />
        На главную
      </Link>
      <h1 className="text-4xl">Крестики нолики</h1>
      <div className="flex gap-2 items-center text-xs text-slate-400">
        <StarIcon className="h-4  hover:text-slate-600" />
        <div className="flex items-center gap-1">
          <UserRound className="h-4  hover:text-slate-600" />2
        </div>
        <div className="flex items-center gap-1">
          <History className="h-4  hover:text-slate-600" />1 мин на ход
        </div>
      </div>
    </div>
  );
}
