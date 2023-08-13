import { List, ListItemText } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Sidebar, SidebarItem, SidebarTitle } from "./styles";

const LIST_ITEMS = [
  { hash: "#preview", label: "Preview" },
  { hash: "#story-metadata", label: "Story Metadata" },
];

export default function StorySettingsSidebar() {
  const [hash, setHash] = useState(location.hash);
  const router = useRouter();

  const onHashChange = (path: string) => {
    const url = new URL(location.origin + path);
    setHash(url.hash);
  };

  useEffect(() => {
    router.events.on("hashChangeStart", onHashChange);

    return () => router.events.off("hashChangeStart", onHashChange);
  }, [router.events]);

  return (
    <Sidebar>
      <SidebarTitle component="h2" variant="h5">
        Story Settings
      </SidebarTitle>
      <List>
        {LIST_ITEMS.map((item) => (
          <SidebarItem
            dense
            key={item.hash}
            component={Link}
            href={item.hash}
            selected={hash === item.hash}
          >
            <ListItemText>{item.label}</ListItemText>
          </SidebarItem>
        ))}
      </List>
    </Sidebar>
  );
}
