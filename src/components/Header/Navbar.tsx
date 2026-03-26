import { Link } from "react-router-dom";
import Logo from "../Logo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import { IconArrowRight } from "@tabler/icons-react";
import { motion } from "motion/react";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import {
  companySections,
  productSections,
  resourcesSections,
  toolsSections,
} from "@/constants/constants";
import { useState } from "react";
// import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";
import { GlareCard } from "../ui/glare-card";
const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <nav className="fixed top-0 left-0 w-full h-16 border-b shadow-2xs flex items-center justify-between px-3 md:px-34 z-20 bg-background">
      <Link
        to={"/"}
        className="-ml-1 flex h-full w-fit items-center justify-center gap-1"
      >
        <Logo size="sm" />

        <h1 className="font-heading text-2xl font-semibold">Relayer</h1>
      </Link>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="dark:text-muted-foreground text-xs">
              Products
            </NavigationMenuTrigger>
            <NavigationMenuContent className="p-3 bg-background/80 backdrop-blur-xl border border-border/50 shadow-2xl rounded-xl animate-in fade-in zoom-in-95 data-[motion=from-start]:slide-in-from-left-2 data-[motion=from-end]:slide-in-from-right-2 data-[motion=to-start]:slide-out-to-left-2 data-[motion=to-end]:slide-out-to-right-2">
              <div className="flex gap-2 rounded-xl min-w-200">
                <GlareCard className="group relative flex flex-col justify-between p-5 w-full overflow-hidden">
                  {/* subtle gradient overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />

                  <div className="flex flex-col gap-4">
                    {/* Icon container */}
                    <div className="relative flex items-center justify-center h-12 w-12 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 group-hover:scale-105 group-hover:border-white/20">
                      <Logo size="sm" />

                      {/* glow effect */}
                      <div className="absolute inset-0 rounded-xl bg-white/10 blur-md opacity-0 group-hover:opacity-100 transition duration-300" />
                    </div>

                    {/* Text */}
                    <div className="flex flex-col gap-1">
                      <p className="text-white font-semibold text-base tracking-tight">
                        All Products
                      </p>

                      <p className="text-xs text-neutral-400 leading-relaxed">
                        Explore our suite of developer tools.
                      </p>
                    </div>
                  </div>

                  {/* Bottom CTA */}
                  <div className="flex items-center justify-between mt-6">
                    <span className="text-xs text-neutral-500 group-hover:text-neutral-300 transition">
                      Explore
                    </span>

                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 transition">
                      <IconArrowRight className="size-3 text-neutral-300 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </GlareCard>
                <div className="flex flex-col  p-2 rounded-md">
                  <div className="flex-1 grid grid-cols-3 gap-13">
                    {productSections.map((section, idx) => (
                      <div key={section.title} className="flex flex-col gap-3">
                        <h3
                          className="text-sm w-fit text-muted-foreground"
                          onMouseEnter={() => setHoveredIndex(idx)}
                          onMouseLeave={() => setHoveredIndex(null)}
                        >
                          {section.title}
                        </h3>

                        <div className="relative h-px w-full bg-border overflow-hidden">
                          <motion.div
                            className="absolute top-0 h-full bg-linear-to-r from-[#A97CF8] via-[#F38CB8] to-[#FDCC92] shadow-[0_0_8px_rgba(255,200,0,0.5)]"
                            initial={{ x: "-100%", width: "100%" }}
                            animate={
                              hoveredIndex === idx ? { x: "0%" } : { x: "100%" }
                            }
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          />
                        </div>

                        <ul className="flex flex-col gap-3">
                          {section.items.map((item) => (
                            <Link
                              to={item.href}
                              key={item.name}
                              className="group"
                            >
                              <p className="text-sm flex items-center gap-1 text-primary font-medium group-hover:text-hover w-fit transition-all duration-200 ease-in-out">
                                {item.name}

                                <IconArrowRight className="opacity-0 -translate-x-1 transition-all duration-200 ease-in-out group-hover:translate-x-0 group-hover:opacity-100 size-3.5" />
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {item.description}
                              </p>
                            </Link>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="w-full py-2 border px-3 rounded-xl flex items-center justify-between">
                    <h1 className="text-sm text-muted-foreground">
                      Try our v1
                    </h1>

                    <Button
                      className="text-sm text-muted-foreground"
                      variant={"link"}
                    >
                      <Link to={"/products"}>Get Started</Link>
                      <IconArrowRight />
                    </Button>
                  </div>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="dark:text-muted-foreground text-xs">
              Tools
            </NavigationMenuTrigger>

            <NavigationMenuContent className="p-3 bg-background/80 backdrop-blur-xl border border-border/50 shadow-2xl  rounded-xl animate-in fade-in zoom-in-95 data-[motion=from-start]:slide-in-from-left-2 data-[motion=from-end]:slide-in-from-right-2 data-[motion=to-start]:slide-out-to-left-2 data-[motion=to-end]:slide-out-to-right-2">
              <div className="flex gap-2 rounded-xl min-w-200">
                <GlareCard className="group relative flex flex-col justify-between p-5 w-full overflow-hidden">
                  {/* subtle gradient overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />

                  <div className="flex flex-col gap-4">
                    {/* Icon container */}
                    <div className="relative flex items-center justify-center h-12 w-12 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 group-hover:scale-105 group-hover:border-white/20">
                      <Logo size="sm" />

                      {/* glow effect */}
                      <div className="absolute inset-0 rounded-xl bg-white/10 blur-md opacity-0 group-hover:opacity-100 transition duration-300" />
                    </div>

                    {/* Text */}
                    <div className="flex flex-col gap-1">
                      <p className="text-white font-semibold text-base tracking-tight">
                        All Tools
                      </p>

                      <p className="text-xs text-neutral-400 leading-relaxed">
                        Explore free tools for your daily tasks.
                      </p>
                    </div>
                  </div>

                  {/* Bottom CTA */}
                  <div className="flex items-center justify-between mt-6">
                    <span className="text-xs text-neutral-500 group-hover:text-neutral-300 transition">
                      Explore
                    </span>

                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 transition">
                      <IconArrowRight className="size-3 text-neutral-300 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </GlareCard>
                <div className="flex flex-col gap-4 p-2 rounded-md">
                  <div className="flex-1 grid grid-cols-3 gap-13">
                    {toolsSections.map((section, idx) => (
                      <div key={section.title} className="flex flex-col gap-3">
                        <h3
                          className="text-sm w-fit text-muted-foreground"
                          onMouseEnter={() => setHoveredIndex(idx)}
                          onMouseLeave={() => setHoveredIndex(null)}
                        >
                          {section.title}
                        </h3>

                        <div className="relative h-px w-full bg-border overflow-hidden">
                          <motion.div
                            className="absolute top-0 h-full bg-linear-to-r from-[#A97CF8] via-[#F38CB8] to-[#FDCC92] shadow-[0_0_8px_rgba(255,200,0,0.5)]"
                            initial={{ x: "-100%", width: "100%" }}
                            animate={
                              hoveredIndex === idx ? { x: "0%" } : { x: "100%" }
                            }
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          />
                        </div>

                        <ul className="flex flex-col gap-3">
                          {section.items.map((item) => (
                            <Link
                              to={item.href}
                              key={item.name}
                              className="group"
                            >
                              <p className="text-sm flex items-center gap-1 text-primary font-medium group-hover:text-hover w-fit transition-all duration-200 ease-in-out">
                                {item.name}

                                <IconArrowRight className="opacity-0 -translate-x-1 transition-all duration-200 ease-in-out group-hover:translate-x-0 group-hover:opacity-100 size-3.5" />
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {item.description}
                              </p>
                            </Link>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="w-full py-2 border px-3 rounded-xl flex items-center justify-between">
                    <h1 className="text-sm text-muted-foreground">
                      Try our v1
                    </h1>

                    <Button
                      className="text-sm text-muted-foreground"
                      variant={"link"}
                    >
                      <Link to={"/products"}>Get Started</Link>
                      <IconArrowRight />
                    </Button>
                  </div>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="dark:text-muted-foreground text-xs">
              Company
            </NavigationMenuTrigger>

            <NavigationMenuContent className="p-3 bg-background/80 backdrop-blur-xl border border-border/50 shadow-2xl  rounded-xl animate-in fade-in zoom-in-95 data-[motion=from-start]:slide-in-from-left-2 data-[motion=from-end]:slide-in-from-right-2 data-[motion=to-start]:slide-out-to-left-2 data-[motion=to-end]:slide-out-to-right-2">
              <div className="grid grid-cols-3 gap-13 min-w-200 p-2 rounded-md">
                {companySections.map((section, idx) => (
                  <div key={section.title} className="flex flex-col gap-3">
                    <h3
                      className="text-sm w-fit text-muted-foreground"
                      onMouseEnter={() => setHoveredIndex(idx)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      {section.title}
                    </h3>

                    <div className="relative h-px w-full bg-border overflow-hidden">
                      <motion.div
                        className="absolute top-0 h-full bg-linear-to-r from-[#A97CF8] via-[#F38CB8] to-[#FDCC92] shadow-[0_0_8px_rgba(255,200,0,0.5)]"
                        initial={{ x: "-100%", width: "100%" }}
                        animate={
                          hoveredIndex === idx ? { x: "0%" } : { x: "100%" }
                        }
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      />
                    </div>

                    <ul className="flex flex-col gap-3">
                      {section.items.map((item) => (
                        <Link to={item.href} key={item.name} className="group">
                          <p className="text-sm flex items-center gap-1 text-primary font-medium group-hover:text-hover w-fit transition-all duration-200 ease-in-out">
                            {item.name}

                            <IconArrowRight className="opacity-0 -translate-x-1 transition-all duration-200 ease-in-out group-hover:translate-x-0 group-hover:opacity-100 size-3.5" />
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {item.description}
                          </p>
                        </Link>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="dark:text-muted-foreground text-xs">
              Resources
            </NavigationMenuTrigger>

            <NavigationMenuContent className="p-3 bg-background/80 backdrop-blur-xl border border-border/50 shadow-2xl  rounded-xl animate-in fade-in zoom-in-95 data-[motion=from-start]:slide-in-from-left-2 data-[motion=from-end]:slide-in-from-right-2 data-[motion=to-start]:slide-out-to-left-2 data-[motion=to-end]:slide-out-to-right-2">
              <div className="grid grid-cols-3 gap-13 min-w-200 p-2 rounded-md">
                {resourcesSections.map((section, idx) => (
                  <div key={section.title} className="flex flex-col gap-3">
                    <h3
                      className="text-sm w-fit text-muted-foreground"
                      onMouseEnter={() => setHoveredIndex(idx)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      {section.title}
                    </h3>

                    <div className="relative h-px w-full bg-border overflow-hidden">
                      <motion.div
                        className="absolute top-0 h-full bg-linear-to-r from-[#A97CF8] via-[#F38CB8] to-[#FDCC92] shadow-[0_0_8px_rgba(255,200,0,0.5)]"
                        initial={{ x: "-100%", width: "100%" }}
                        animate={
                          hoveredIndex === idx ? { x: "0%" } : { x: "100%" }
                        }
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      />
                    </div>

                    <ul className="flex flex-col gap-3">
                      {section.items.map((item) => (
                        <Link to={item.href} key={item.name} className="group">
                          <p className="text-sm flex items-center gap-1 text-primary font-medium group-hover:text-hover w-fit transition-all duration-200 ease-in-out">
                            {item.name}

                            <IconArrowRight className="opacity-0 -translate-x-1 transition-all duration-200 ease-in-out group-hover:translate-x-0 group-hover:opacity-100 size-3.5" />
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {item.description}
                          </p>
                        </Link>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link to="/report" className="dark:text-muted-foreground text-xs">
                Report
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="h-full w-fit flex items-center justify-center gap-2">
        {/* <AnimatedThemeToggler /> */}
        <Button variant={"ghost"} className="text-muted-foreground">
          Log in
        </Button>
        <InteractiveHoverButton className="font-heading">
          Get Started
        </InteractiveHoverButton>
      </div>
    </nav>
  );
};

export default Navbar;
