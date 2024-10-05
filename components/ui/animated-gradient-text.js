import { cn } from "@/lib/utils";

export default function AnimatedGradientText({
  children,
  
}) {
  return (
    (<div
      className={cn(
        "relative  flex-row items-center justify-center  px-4 py-1.5 text-sm font-medium   transition-shadow duration-500 ease-out [--bg-size:300%]  ",
        
      )}>
      <div
        className={``} />
      {children}
    </div>)
  );
}
