import { useTheme } from "@/context/ThemeProvider";
import { Button } from "./ui/button";
import { IconMoon, IconSunHigh } from "@tabler/icons-react";

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant={"ghost"}
      size={"icon-sm"}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <IconSunHigh /> : <IconMoon stroke={1} />}
    </Button>
  );
}
