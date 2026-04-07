import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarSeparator,
} from "../ui/sidebar";
import AccountSwitcher from "./AccountSwitcher";
import AdIntegration from "./AdIntegration";
import SidebarAnalytics from "./SidebarAnalytics";
import SidebarCampaigns from "./SidebarCampaigns";
import SidebarOverview from "./SidebarOverview";
import SidebarSettings from "./SidebarSettings";
import SidebarUser from "./SidebarUser";

const AppSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <AccountSwitcher />
      </SidebarHeader>

      <SidebarContent className="mt-1">
        <AdIntegration />

        <SidebarSeparator />

        <SidebarOverview />

        <SidebarAnalytics />

        <SidebarCampaigns />

        <SidebarSettings className="mt-auto" />
      </SidebarContent>

      <SidebarFooter>
        <SidebarUser />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
};

export default AppSidebar;
