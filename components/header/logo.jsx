import { Circle, X } from "lucide-react";
import Link from "next/link";
export function Logo() {
  return (
    <Link href="/">
      <div className="flex items-center gap-2">
        <X className="h-12 w-12 text-yellow-500" />
        <div className="w-px h-8 bg-slate-600"></div>
        <div className="flex items-end">
          <Circle className="h-9 w-9 text-green-500" />
          <span className="text-xl">nline</span>
        </div>
      </div>
    </Link>
  );
}
