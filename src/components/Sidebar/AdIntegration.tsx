import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "../ui/sidebar";
import FacebookLogo from "../FacebookLogo";
import GoogleLogo from "../GoogleLogo";
import MicrosoftLogo from "../MicrosoftLogo";
import { IconPlus } from "@tabler/icons-react";

const AdIntegration = () => {
  const { state } = useSidebar();

  const isCollapsed = state === "collapsed";
  return (
    <SidebarGroup>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton className="justify-between">
            {isCollapsed && (
              <div className="size-4 shrink-0">
                <IconPlus />
              </div>
            )}
            <span className="text-xs">Ad Integrations</span>

            <div className="bg-sidebar-accent text-sidebar-primary-foreground py-1 px-2 flex items-center justify-center h-fit w-fit rounded-md size-8 gap-1">
              <GoogleLogo />
              <FacebookLogo />
              <MicrosoftLogo />
            </div>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
};

export default AdIntegration;
