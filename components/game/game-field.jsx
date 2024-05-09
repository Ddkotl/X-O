import clsx from "clsx";
import { UiButton } from "../uikit/ui-button";
import { GameSymbol } from "./game_symbol";
import { useGameState } from "./use-game-state";

export function GameField({ className }) {
  const { cells, currentMove, handleCellClick, nextMove } = useGameState();
  const actions = (
    <>
      {" "}
      <UiButton size="md" variant="primary" className="w-28">
        Ничья
      </UiButton>
      <UiButton size="md" variant="outline" className="w-28">
        Сдаться
      </UiButton>
    </>
  );
  return (
    <GameFieldLayout className={className}>
      <GameMoveInfo
        actions={actions}
        currentMove={currentMove}
        nextMove={nextMove}
      ></GameMoveInfo>
      <GameGrid>
        {cells.map((symbol, index) => (
          <GameCell
            key={index}
            onClick={() => {
              handleCellClick(index);
            }}
          >
            {symbol && <GameSymbol symbol={symbol} className="w-5 h-5" />}
          </GameCell>
        ))}
      </GameGrid>
    </GameFieldLayout>
  );
}
function GameCell({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="border border-slate-300 -ml-px -mt-px flex items-center justify-center"
    >
      {children}
    </button>
  );
}

function GameFieldLayout({ children, className }) {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 pt-5 pb-7",
      )}
    >
      {children}
    </div>
  );
}

function GameMoveInfo({ actions, currentMove, nextMove }) {
  return (
    <div className="flex  items-center justify-between">
      <div className="mr-auto">
        <div className="flex items-center gap-1  text-xl">
          Ход:
          <GameSymbol className="h-6 w-6" symbol={currentMove} />
        </div>
        <div className="flex items-center gap-1 text-slate-400 text-sm">
          Следующий:
          <GameSymbol className="h-4 w-4" symbol={nextMove} />
        </div>
      </div>
      <div className="flex gap-3 items-center">{actions}</div>
    </div>
  );
}

function GameGrid({ children }) {
  return (
    <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3">
      {children}
    </div>
  );
}
