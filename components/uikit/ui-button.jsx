import clsx from "clsx";
/**
 * @param{{
	children:any,
	className:string,
	size:'md' | 'lg'
	variant:'primary' | 'outline'
}}
 */

export function UiButton({ children, className, size, variant }) {
  const buttonClassName = clsx(
    "transition-colors",
    className,
    {
      md: "  px-6 py-2 text-sm rounded",
      lg: "  px-5 py-2 text-xl rounded-lg",
    }[size],
    {
      primary: "bg-teal-600 text-white hover:bg-teal-500",
      outline: "border border-teal-600 text-teal-600 hover:bg-teal-50",
    }[variant],
  );
  return <button className={buttonClassName}>{children}</button>;
}
