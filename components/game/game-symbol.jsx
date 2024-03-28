import { SYMBOL_O, SYMBOL_X } from "./constants";

export function GameSymbol({ symbol }) {
  const getSymbolClassName = (symbol) => {
    if (symbol === SYMBOL_O) return "text-emerald-500";
    if (symbol === SYMBOL_X) return "text-pink-500";
    return "";
  };
  return (
    <span className={`text-xl leading-6 ${getSymbolClassName(symbol)}`}>
      {symbol}
    </span>
  );
}
