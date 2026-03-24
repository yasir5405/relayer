import { Link } from "react-router-dom";
import Logo from "../Logo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import { DottedGlowBackground } from "../Backgrounds/DottedGlowBackground";
import { BackgroundBeamsWithCollision } from "../Backgrounds/background-beams-with-collision";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { useTheme } from "@/context/ThemeProvider";
import {
  IconArrowRight,
  IconChevronRight,
  IconChevronsRight,
} from "@tabler/icons-react";
import { Separator } from "../ui/separator";

const Navbar = () => {
  const tools: { name: string; href: string }[] = [
    { name: "Json Formatter", href: "/tools/json-formatter" },
    { name: "Base64 Encoder/Decoder", href: "/tools/base64" },
    {
      name: "JSON to TypeScript Schema Generator",
      href: "/tools/schema-generator",
    },
    {
      name: "Regex Tester",
      href: "/tools/regex-tester",
    },
    {
      name: "Hash Generator",
      href: "/tools/hash-generator",
    },
  ];

  const company: { name: string; href: string }[] = [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Team", href: "/team" },
  ];

  const productSections = [
    {
      title: "Second Brain",
      items: [
        {
          name: "Notes",
          description: "Capture ideas and thoughts",
          href: "/products/second-brain/notes",
        },
        {
          name: "AI Reflection",
          description: "Get insights from your notes",
          href: "/products/second-brain/ai",
        },
        {
          name: "Smart Search",
          description: "Find anything instantly",
          href: "/products/second-brain/search",
        },
      ],
    },
    {
      title: "AI Aggregator",
      items: [
        {
          name: "Multi-Model Chat",
          description: "Compare AI responses",
          href: "/products/ai-aggregator/chat",
        },
        {
          name: "Unified Answer",
          description: "Get one refined output",
          href: "/products/ai-aggregator/unified",
        },
        {
          name: "Model Comparison",
          description: "See differences clearly",
          href: "/products/ai-aggregator/compare",
        },
      ],
    },
    {
      title: "API Workspace",
      items: [
        {
          name: "Request Builder",
          description: "Send API requests easily",
          href: "/products/api-workspace/request",
        },
        {
          name: "Response Viewer",
          description: "Inspect responses clearly",
          href: "/products/api-workspace/response",
        },
        {
          name: "Collections",
          description: "Organize your APIs",
          href: "/products/api-workspace/collections",
        },
      ],
    },
  ];

  const { theme } = useTheme();
  return (
    <nav className="fixed top-0 left-0 w-full h-16 border-b shadow-2xs flex items-center justify-between px-3 md:px-34 bg-background">
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
            <NavigationMenuContent className="p-2 bg-background">
              <div className="grid grid-cols-3 gap-13 min-w-180 p-2 rounded-md">
                {productSections.map((section) => (
                  <div key={section.title} className="flex flex-col gap-3">
                    <h3 className="text-xs font-semibold">{section.title}</h3>

                    <Separator orientation="horizontal" />

                    <ul className="flex flex-col gap-3">
                      {section.items.map((item) => (
                        <Link to={item.href} key={item.name} className="group">
                          <p className="text-xs flex items-center gap-1 font-medium group-hover:text-primary/90">
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
              Tools
            </NavigationMenuTrigger>
            <NavigationMenuContent className="p-4 bg-background">
              <div className="flex min-w-150 gap-2">
                {/* Left div */}
                <div className="h-full w-full">
                  <ul className="flex flex-col gap-3">
                    {tools.map((product) => (
                      <Link
                        to={product.href}
                        key={product.name}
                        className="text-muted-foreground hover:text-accent-foreground transition-all duration-150 ease-in text-sm"
                      >
                        {product.name}
                      </Link>
                    ))}
                  </ul>
                </div>

                {/* Right Div */}
                <div className="flex gap-2 w-full">
                  <div className="w-1/2 h-full border rounded-md relative cursor-pointer overflow-hidden">
                    <BackgroundBeamsWithCollision className="w-full flex-col p-4">
                      <h1 className="leading-5 text-sm font-semibold dark:text-white">
                        JWT Decoder <br /> & Inspector{" "}
                      </h1>
                    </BackgroundBeamsWithCollision>
                  </div>
                  <div className="w-1/2 h-full border rounded-md relative cursor-pointer hover:bg-background/90 p-4">
                    <h1 className="leading-5 text-sm font-semibold dark:text-white">
                      API Request <br /> Tester{" "}
                    </h1>
                    <DottedGlowBackground
                      className="pointer-events-none mask-radial-to-90% mask-radial-at-center  hover:bg-background"
                      opacity={1}
                      gap={10}
                      radius={1.6}
                      colorLightVar="--color-neutral-500"
                      glowColorLightVar="--color-neutral-600"
                      colorDarkVar="--color-neutral-500"
                      glowColorDarkVar="--color-sky-800"
                      backgroundOpacity={0}
                      speedMin={0.3}
                      speedMax={1.6}
                      speedScale={1}
                    />
                  </div>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="dark:text-muted-foreground text-xs">
              Company
            </NavigationMenuTrigger>

            <NavigationMenuContent className="p-4 bg-background">
              <div className="h-full flex min-w-100 gap-2">
                <ul className="flex flex-col gap-3">
                  {company.map((product) => (
                    <Link
                      to={product.href}
                      key={product.name}
                      className="text-muted-foreground hover:text-accent-foreground transition-all duration-150 ease-in text-sm"
                    >
                      {product.name}
                    </Link>
                  ))}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="h-full w-fit flex items-center justify-center gap-2">
        <ThemeSwitcher />
        <Button variant={"ghost"}>Log in</Button>
        <Button
          variant={theme === "dark" ? "secondary" : "default"}
          className="text-black dark:text-white overflow-hidden group"
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
    </nav>
  );
};

export default Navbar;
