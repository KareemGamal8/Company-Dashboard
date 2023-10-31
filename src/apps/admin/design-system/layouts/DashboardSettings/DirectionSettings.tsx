import { Text, UnstyledButton } from "@mantine/core";
import { trans } from "@mongez/localization";
import { current } from "@mongez/react";
import { changeLocaleCode } from "@mongez/react-router";
import { localeCodesList } from "apps/admin/utils/localization";
import Tooltip from "design-system/components/Tooltip";

export default function DirectionSettings() {
  const currentLocaleCode = current("localeCode");
  const otherLocaleCode = currentLocaleCode === "en" ? "ar" : "en";

  const switchLanguage = () => {
    changeLocaleCode(otherLocaleCode);
  };

  const otherLLanguage = localeCodesList[otherLocaleCode].name;

  return (
    <Tooltip
      zIndex={1000}
      withArrow
      label={currentLocaleCode === "en" ? trans("arabic") : trans("english")}>
      <UnstyledButton>
        <Text onClick={switchLanguage} weight={600}>
          {otherLLanguage}
        </Text>
      </UnstyledButton>
    </Tooltip>
  );
}
