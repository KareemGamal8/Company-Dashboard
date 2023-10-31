import "./initial-config";

import { setLocalizationConfigurations } from "@mongez/localization";
import { setAppConfigurations } from "@mongez/react";
import { setFormConfigurations } from "@mongez/react-form";
import { setHelmetConfigurations } from "@mongez/react-helmet";
import { jsxConverter } from "@mongez/react-localization";
import { setPreloadConfiguration } from "@mongez/react-utils";
import { localeCodesList } from "app/utils/localization";
import "../definitions.d.ts";
import { appName, defaultLocaleCode, fallbackLocaleCode } from "../flags";
import "./moonlight-configurations";
import "./router-configurations";

// App configurations
setAppConfigurations({
  localization: {
    defaultLocaleCode: defaultLocaleCode,
    fallback: fallbackLocaleCode,
    locales: localeCodesList,
  },
});

// Localization configurations
setLocalizationConfigurations({
  converter: jsxConverter,
});

// Helmet configurations
setHelmetConfigurations({
  appendAppName: true,
  appNameSeparator: " | ",
  translatable: true,
  translateAppName: true,
  appName: appName,
});

// Form configurations
setFormConfigurations({
  ignoreEmptyValues: false,
});

setPreloadConfiguration({
  cache: false,
});
