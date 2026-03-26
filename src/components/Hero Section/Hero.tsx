import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import { Button } from "../ui/button";
const Hero = () => {
  return (
    <div className="h-[90vh] w-full overflow-hidden relative flex">
      <div className="h-full w-[60%] flex flex-col justify-center gap-7">
        <h1 className="font-heading text-7xl font-semibold max-w-2xl leading-13">
          Ship faster. Debug smarter. Never leave your flow.
        </h1>

        <p className="dark:text-muted-foreground">
          A modern developer platform to build, debug, and ship faster — without
          switching between tools.
        </p>

        <div className="w-fit flex items-center justify-center gap-3">
          <Button
            size={"lg"}
            className="rounded-full text-base py-2 px-8 dark:text-white hover:bg-hover transition-all duration-200 ease-in-out"
          >
            Get Started
          </Button>
          <InteractiveHoverButton className="font-heading">
            Explore
          </InteractiveHoverButton>
        </div>
      </div>

      <div className="h-full w-[40%] flex items-center justify-center relative">
        
      </div>
    </div>
  );
};

export default Hero;
