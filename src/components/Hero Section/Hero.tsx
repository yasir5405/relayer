import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import { Button } from "../ui/button";
const Hero = () => {
  return (
    <div className="h-[90vh] w-full overflow-hidden relative flex flex-col items-center justify-center gap-7">
      <h1 className="font-heading text-7xl text-center font-semibold max-w-5xl leading-16">
        The personal finance system for clarity and control
      </h1>

      <p className="dark:text-muted-foreground">
        Understand your spending, stay on budget, and plan ahead — all without
        connecting your bank.
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
  );
};

export default Hero;
