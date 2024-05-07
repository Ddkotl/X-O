import clsx from "clsx";
import Image from "next/image";
import avatarSrc from "./avatar.jpg";

export function Profile({ className }) {
  return (
    <div
      className={clsx(
        className,
        "flex items-center gap-2 text-start text-teal-600",
      )}
    >
      <Image src={avatarSrc} alt="avatar" className="h-12 w-12" />
      <div>
        <div className="  text-lg">DmitryKotl</div>
        <div className=" text-slate-400 text-xs">Рейтинг: 2342</div>
      </div>
    </div>
  );
}
