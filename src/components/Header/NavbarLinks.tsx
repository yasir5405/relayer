import { IconSearch } from "@tabler/icons-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import GoogleLogo from "../GoogleLogo";
import FacebookLogo from "../FacebookLogo";
import MicrosoftLogo from "../MicrosoftLogo";

const NavbarLinks = () => {
  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>

          <NavigationMenuContent>
            <div className="min-w-100 min-h-80 flex flex-col">
              {/* Top div */}
              <div className="min-w-100 h-fit flex">
                <div className="w-100 h-fit border-r flex flex-col gap-3.5 hover:bg-accent transition-all duration-150 ease-in cursor-pointer  px-4 pt-8 pb-6">
                  <div className="bg-orange-400 w-fit p-1 rounded-md">
                    <IconSearch className="size-3.5" />
                  </div>

                  <h1 className="text-sm">Waste Detector</h1>
                  <p className="text-xs text-muted-foreground leading-3.5">
                    Find budget leaking to underperforming keywords and
                    placements
                  </p>

                  <div className="w-full flex flex-col gap-2 relative">
                    {/* Each item is its own bordered card */}
                    {[
                      {
                        dot: "bg-red-500",
                        label: "Brand Campaign - CPC Spike",
                        badge: "+84%",
                        badgeClass: "bg-red-100 text-red-700",
                      },
                      {
                        dot: "bg-orange-500",
                        label: "Retargeting - low CVR",
                        badge: "Low",
                        badgeClass: "bg-yellow-100 text-yellow-700",
                      },
                      {
                        dot: "bg-green-500",
                        label: "High CTR - Great Conversion",
                        badge: "+12%",
                        badgeClass: "bg-green-100 text-green-700",
                      },
                      {
                        dot: "bg-red-300",
                        label: "Display - zero conversions",
                        badge: "Pause",
                        badgeClass: "bg-red-100 text-red-700",
                        faded: true,
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className={`flex w-full items-center gap-2 px-3 py-2 rounded-md border  hover:bg-accent transition-colors duration-150 cursor-pointer ${
                          item.faded ? "opacity-50 pointer-events-none" : ""
                        }`}
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full shrink-0 ${item.dot}`}
                        />
                        <span className="flex-1 text-left text-xs truncate">
                          {item.label}
                        </span>
                        <div
                          className={`px-2 py-0.5 text-xs rounded-full shrink-0 ${item.badgeClass}`}
                        >
                          {item.badge}
                        </div>
                      </div>
                    ))}

                    {/* Gradient fade over last item */}
                    <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-background to-transparent pointer-events-none" />
                  </div>
                </div>
                <div className=" flex flex-col">
                  <h1 className="text-sm">Waste Detection</h1>
                </div>
                <div className=" flex flex-col">
                  <h1 className="text-sm">Waste Detection</h1>
                </div>
              </div>

              {/* Bottom div */}

              <div className="w-200 flex">
                {/* Left div */}
                <div className="flex w-1/2 items-center justify-between cursor-pointer hover:bg-accent py-3 px-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-sm">Integrations</p>
                    <p className="text-muted-foreground  text-xs">
                      Connect Google, Meta, Microsoft & more
                    </p>
                  </div>

                  <div className="flex items-center justify-center gap-1">
                    <GoogleLogo />
                    <FacebookLogo />
                    <MicrosoftLogo />
                  </div>
                </div>

                {/* RIght div */}
                <div className="w-1/2 bg-black"></div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavbarLinks;
