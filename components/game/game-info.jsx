import clsx from "clsx";
import { Profile } from "../profile";
import { GAME_SYMBOLS } from "./constants";
import { GameSymbol } from "./game_symbol";

import { useEffect, useState } from "react";
import avaterSrc1 from "./images/avatar.jpg";
const players = [
  {
    id: 1,
    name: "DmitryKotl",
    rating: 234,
    avatar: avaterSrc1,
    symbol: GAME_SYMBOLS.CROSS,
  },
  {
    id: 2,
    name: "qwerty123",
    rating: 2341,
    avatar: avaterSrc1,
    symbol: GAME_SYMBOLS.ZERO,
  },
  {
    id: 3,
    name: "dantefff",
    rating: 231,
    avatar: avaterSrc1,
    symbol: GAME_SYMBOLS.TRINGLE,
  },
  {
    id: 4,
    name: "stas228111111111111111111111111111111",
    rating: 341,
    avatar: avaterSrc1,
    symbol: GAME_SYMBOLS.SQUERE,
  },
];

export function GameInfo({ className, playersCount, currentMove }) {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 py-4 grid grid-cols-2 gap-3 justify-between",
      )}
    >
      {players.slice(0, playersCount).map((player, index) => (
        <PlayerInfo
          key={player.id}
          playerInfo={player}
          isRight={index % 2 === 1}
          isTimerRunnung={currentMove === player.symbol}
        />
      ))}
    </div>
  );
}

function PlayerInfo({ playerInfo, isRight, isTimerRunnung }) {
  const [seconds, setSeconds] = useState(60);
  const minutesString = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secondsString = String(seconds % 60).padStart(2, "0");
  const isDanger = seconds < 10;

  useEffect(() => {
    if (isTimerRunnung) {
      const interval = setInterval(() => {
        setSeconds((s) => Math.max(0, s - 1));
      }, 1000);
      return () => {
        clearInterval(interval);
        setSeconds(60);
      };
    }
  }, [isTimerRunnung]);

  const getTimerColor = () => {
    if (isTimerRunnung) {
      return isDanger ? "text-orange-600" : "text-slate-900";
    }
    return "text-slate-400";
  };

  return (
    <div className="flex gap-3 items-center">
      <div className={clsx("relative", isRight && "order-3")}>
        <Profile
          className="w-44"
          name={playerInfo.name}
          rating={playerInfo.rating}
          avatar={playerInfo.avatar}
        />
        <div className="w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center">
          <GameSymbol symbol={playerInfo.symbol} />
        </div>
      </div>
      <div
        className={clsx("w-px h-8 bg-slate-300 ", isRight && "order-2")}
      ></div>
      <div
        className={clsx(
          " text-lg font-semibold w-[60px]",
          isRight && "order-1",
          getTimerColor(),
        )}
      >
        {minutesString}:{secondsString}
      </div>
    </div>
  );
}
