import {
  AppShell as CustomAppShell,
  Footer as CustomFooter,
  Navbar,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { BasicComponentProps } from "app/utils/types";
import { SidebarToggleAtom } from "apps/admin/design-system/atoms/sidebar-toggle-atom";
import Footer from "../Footer";
import Header from "../Header/Header";
import Sidebar from "../Sidebar";
import { appShellStyle } from "./style";

export default function AppShell({ children }: BasicComponentProps) {
  const isMobile = useMediaQuery("(max-width: 1000px)");
  const opened = SidebarToggleAtom.use("opened");

  return (
    <>
      <CustomAppShell
        styles={{ ...appShellStyle }}
        // Navbar
        navbar={
          opened ? (
            <Navbar
              hidden
              width={{ base: isMobile ? 0 : 240 }}
              p="xs"
              sx={{ display: isMobile ? "none" : "block" }}>
              <Sidebar />
            </Navbar>
          ) : (
            <></>
          )
        }
        // Header
        header={<Header />}
        footer={
          <CustomFooter style={{ position: "relative" }} p="sm" height={60}>
            <Footer />
          </CustomFooter>
        }>
        <main>{children}</main>
      </CustomAppShell>
    </>
  );
}
