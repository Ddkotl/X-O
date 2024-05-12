import clsx from "clsx";
import Image from "next/image";
import avatarSrc from "./avatar.jpg";

export function Profile({ className, name, rating, avatar = avatarSrc }) {
  return (
    <div
      className={clsx(
        className,
        "flex items-center gap-2 text-start text-teal-600",
      )}
    >
      <Image
        src={avatar}
        alt="avatar"
        width={12}
        height={12}
        className="h-12 w-12"
      />
      <div className="overflow-hidden">
        <div className="  text-lg truncate">{name}</div>
        <div className=" text-slate-400 text-xs">{rating}</div>
      </div>
    </div>
  );
}
