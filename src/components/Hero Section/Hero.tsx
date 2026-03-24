import { useTheme } from "@/context/ThemeProvider";
import { Button } from "../ui/button";
import { IconChevronRight, IconChevronsRight } from "@tabler/icons-react";

const Hero = () => {
  const { theme } = useTheme();
  return (
    <div className="h-[90vh] w-full flex flex-col justify-center gap-5">
      <h1 className="font-heading text-6xl font-semibold max-w-4xl leading-13">
        The Ultimate Developer Suite for teams and developers
      </h1>

      <p className="dark:text-muted-foreground">
        A modern developer platform to build, debug, and ship faster — without
        switching between tools.
      </p>

      <div>
        <Button
          variant={theme === "dark" ? "secondary" : "default"}
          size={"lg"}
          className=" overflow-hidden group "
        >
          Get Started
          <span className="relative w-4 h-4">
            {/* Current icon - slides out */}
            <IconChevronRight className="absolute inset-0 transition-all duration-200 ease-in-out group-hover:translate-x-4 group-hover:opacity-0" />
            {/* New icon - slides in */}
            <IconChevronsRight className="absolute inset-0 opacity-0 -translate-x-4 transition-all duration-200 ease-in-out group-hover:translate-x-0 group-hover:opacity-100" />
          </span>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
