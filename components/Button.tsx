import { ReactNode } from "react";
import clsx from "clsx";

export default function Button({children, href, onClick}:{children:ReactNode, href?:string, onClick?:()=>void}){
  const base = "inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition transform hover:-translate-y-0.5";
  return href ? (
    <a href={href} className={clsx(base, "bg-gradient-to-r from-purple-600 to-cyan-400 text-white")}>{children}</a>
  ) : (
    <button onClick={onClick} className={clsx(base, "bg-gradient-to-r from-purple-600 to-cyan-400 text-white")}>{children}</button>
  );
}
