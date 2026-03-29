import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import {
  companySections,
  productSections,
  resourcesSections,
  toolsSections,
} from "@/constants/constants";
import { IconArrowRight } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useState } from "react";
import { navigationMenuTriggerStyle } from "../ui/navigation-menu-trigger-style";
import MenuSections from "./MenuSections";

const NavbarLinks = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-[#061B31] dark:text-muted-foreground text-sm">
            Products
          </NavigationMenuTrigger>
          <NavigationMenuContent className="p-3 bg-background/80 backdrop-blur-xl border border-border/50 shadow-2xl rounded-xl animate-in fade-in zoom-in-95 data-[motion=from-start]:slide-in-from-left-2 data-[motion=from-end]:slide-in-from-right-2 data-[motion=to-start]:slide-out-to-left-2 data-[motion=to-end]:slide-out-to-right-2">
            <div className="flex flex-col gap-4  p-2 rounded-md min-w-200">
              <MenuSections
                sections={productSections}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
              />

              <div className="w-full py-2 border px-3 rounded-xl flex items-center justify-between">
                <h1 className="text-xs text-muted-foreground">Try our v1</h1>

                <Button
                  className="text-xs text-muted-foreground"
                  variant={"link"}
                >
                  <Link to={"/products"}>Get Started</Link>
                  <IconArrowRight />
                </Button>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-[#061B31] dark:text-muted-foreground text-sm">
            Tools
          </NavigationMenuTrigger>

          <NavigationMenuContent className="p-3 bg-background/80 backdrop-blur-xl border border-border/50 shadow-2xl  rounded-xl animate-in fade-in zoom-in-95 data-[motion=from-start]:slide-in-from-left-2 data-[motion=from-end]:slide-in-from-right-2 data-[motion=to-start]:slide-out-to-left-2 data-[motion=to-end]:slide-out-to-right-2">
            <div className="flex flex-col gap-4 p-2 rounded-md min-w-200">
              <MenuSections
                sections={toolsSections}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
              />

              <div className="w-full py-2 border px-3 rounded-xl flex items-center justify-between">
                <h1 className="text-xs text-muted-foreground">Try our v1</h1>

                <Button
                  className="text-xs text-muted-foreground"
                  variant={"link"}
                >
                  <Link to={"/products"}>Get Started</Link>
                  <IconArrowRight />
                </Button>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-[#061B31] dark:text-muted-foreground text-sm">
            Company
          </NavigationMenuTrigger>

          <NavigationMenuContent className="p-3 bg-background/80 backdrop-blur-xl border border-border/50 shadow-2xl  rounded-xl animate-in fade-in zoom-in-95 data-[motion=from-start]:slide-in-from-left-2 data-[motion=from-end]:slide-in-from-right-2 data-[motion=to-start]:slide-out-to-left-2 data-[motion=to-end]:slide-out-to-right-2">
            <div className="min-w-200 p-2 rounded-md">
              <MenuSections
                sections={companySections}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
              />
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-[#061B31] dark:text-muted-foreground text-sm">
            Resources
          </NavigationMenuTrigger>

          <NavigationMenuContent className="p-3 bg-background/80 backdrop-blur-xl border border-border/50 shadow-2xl  rounded-xl animate-in fade-in zoom-in-95 data-[motion=from-start]:slide-in-from-left-2 data-[motion=from-end]:slide-in-from-right-2 data-[motion=to-start]:slide-out-to-left-2 data-[motion=to-end]:slide-out-to-right-2">
            <div className="min-w-200 p-2 rounded-md">
              <MenuSections
                sections={resourcesSections}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
              />
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link
              to="/report"
              className="text-[#061B31] dark:text-muted-foreground text-sm leading-none"
            >
              Report
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavbarLinks;
