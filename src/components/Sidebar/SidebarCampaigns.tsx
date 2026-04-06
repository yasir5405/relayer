import {
  IconChartLine,
  IconFileAnalytics,
  type TablerIcon,
} from "@tabler/icons-react";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import { Link } from "react-router-dom";

const SidebarCampaigns = () => {
  const campaignSidebarList: {
    title: string;
    url: string;
    icon?: TablerIcon;
    isActive?: boolean;
  }[] = [
    {
      title: "Performance",
      url: "/performance",
      icon: IconChartLine,
      isActive: true,
    },
    {
      title: "Reports",
      url: "/reports",
      icon: IconFileAnalytics,
    },
  ];
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Analytics</SidebarGroupLabel>

      <SidebarMenu>
        {campaignSidebarList.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild>
              <Link to={item.url}>
                {item.icon && <item.icon />}
                <span>{item.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
};

export default SidebarCampaigns;
