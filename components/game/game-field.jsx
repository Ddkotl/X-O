import clsx from "clsx";
import { Circle, X } from "lucide-react";
import { UiButton } from "../uikit/ui-button";

const cells = new Array(19 * 19).fill(null);

export function GameField({ className }) {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 pt-5 pb-7",
      )}
    >
      <div className="flex  items-center justify-between">
        <div className="mr-auto">
          <div className="flex items-center gap-1  text-xl">
            Ход:
            <Circle className="h-4 w-4 text-teal-600" />
          </div>
          <div className="flex items-center gap-1 text-slate-400 text-sm">
            Следующий:
            <X className="h-4 w-4 text-orange-600" />
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <UiButton size="md" variant="primary" className="w-28">
            Ничья
          </UiButton>
          <UiButton size="md" variant="outline" className="w-28">
            Сдаться
          </UiButton>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3">
        {cells.map((_, i) => {
          return (
            <button
              key={i}
              className="border border-slate-200 -ml-px -mt-px flex items-center justify-center"
            ></button>
          );
        })}
      </div>
    </div>
  );
}
