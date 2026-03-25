import { cn } from "@/lib/utils";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import { Ripple } from "../ui/ripple";
import { AnimatedGradientText } from "../ui/animated-gradient-text";
import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="h-[90vh] w-full overflow-hidden relative flex flex-col justify-center items-center gap-12">
      <div className="group relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]">
        <span
          className={cn(
            "animate-gradient absolute inset-0 block h-full w-full rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]",
          )}
          style={{
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "destination-out",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "subtract",
            WebkitClipPath: "padding-box",
          }}
        />
        🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
        <AnimatedGradientText className="text-sm font-medium">
          Introducing Relayer
        </AnimatedGradientText>
        <ChevronRight className="ml-1 size-4 stroke-neutral-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </div>
      <h1 className="font-heading text-6xl font-semibold max-w-4xl text-center leading-13">
        Ship faster. Debug smarter. Never leave your flow
      </h1>

      <p className="dark:text-muted-foreground">
        A modern developer platform to build, debug, and ship faster — without
        switching between tools.
      </p>

      <div className="w-fit flex items-center justify-center gap-3">
        <Button size={"lg"} className="rounded-full text-base py-2 px-8 dark:text-white">
          Get Started
        </Button>
        <InteractiveHoverButton className="font-heading">
          Explore
        </InteractiveHoverButton>
      </div>

      <Ripple className="-z-10" />
    </div>
  );
};

export default Hero;
