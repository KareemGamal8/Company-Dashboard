import { Text } from "@mantine/core";
import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import URLS from "apps/admin/utils/urls";
import { appVersion, logo } from "shared/flags";
import { FooterWrapper } from "./Footer.Style";

// Get Dynamic Year...
const year = new Date().getFullYear();

export default function Footer() {
  return (
    <FooterWrapper>
      <Text weight={500} fz="sm" color="gray">
        {trans("copyRight")} ©{year}
      </Text>
      <Text color="gray" fz="sm" weight={500}>
        v{appVersion}
      </Text>
      <Link to={URLS.home} title="1Pass">
        <img src={logo} alt="1Pass" width={50} />
      </Link>
    </FooterWrapper>
  );
}
