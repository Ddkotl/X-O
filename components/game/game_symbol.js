import clsx from "clsx";
import { Circle, Square, Triangle, X } from "lucide-react";
import { GAME_SYMBOLS } from "./constants";

export function GameSymbol({ symbol, className }) {
  const Icon =
    {
      [GAME_SYMBOLS.CROSS]: X,
      [GAME_SYMBOLS.ZERO]: Circle,
      [GAME_SYMBOLS.SQUERE]: Square,
      [GAME_SYMBOLS.TRINGLE]: Triangle,
    }[symbol] ?? X;
  const iconClassName =
    {
      [GAME_SYMBOLS.CROSS]: "text-orange-600",
      [GAME_SYMBOLS.ZERO]: "text-teal-600",
      [GAME_SYMBOLS.SQUERE]: "text-blue-600",
      [GAME_SYMBOLS.TRINGLE]: "text-purple-600",
    }[symbol] ?? "text-orange-600";
  return <Icon className={clsx(iconClassName, className)} />;
}
