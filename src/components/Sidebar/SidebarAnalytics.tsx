import {
  IconLayoutGrid,
  IconPhoto,
  IconTargetArrow,
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

const SidebarAnalytics = () => {
  const campaignSidebarList: {
    title: string;
    url: string;
    icon?: TablerIcon;
    isActive?: boolean;
  }[] = [
    {
      title: "All Campaigns",
      url: "/all-campaigns",
      icon: IconTargetArrow,
      isActive: true,
    },
    {
      title: "Ad Groups",
      url: "/ad-groups",
      icon: IconLayoutGrid,
    },
    {
      title: "Ads",
      url: "/ads",
      icon: IconPhoto,
    },
  ];
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Campaigns</SidebarGroupLabel>

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

export default SidebarAnalytics;
