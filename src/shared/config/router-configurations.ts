import {
  RouterConfigurations,
  setRouterConfigurations,
} from "@mongez/react-router";
import { localeCodesList } from "apps/admin/utils/localization";
import React from "react";
import { productionBasePath } from "../flags";

const routerConfigurations: RouterConfigurations = {
  strictMode: false,
  basePath: productionBasePath,
  forceRefresh: true,
  localization: {
    changeLanguageReloadMode: "hard",
    localeCodes: Object.keys(localeCodesList),
  },
  lazyLoading: {
    loadingComponent: React.lazy(
      () => import("design-system/layouts/Root/ProgressBar"),
    ),
    loaders: {
      app: (app: string) => {
        return import(`./../../apps/${app}/${app}-provider.ts`);
      },
      module: (app: string, module: string) => {
        return import(`./../../apps/${app}/${module}/provider.ts`);
      },
    },
  },
  notFound: {
    mode: "render",
    component: React.lazy(() => import("design-system/layouts/NotFoundPage")),
  },
  rootComponent: React.lazy(() => import("design-system/layouts/Root/App")),
};

setRouterConfigurations(routerConfigurations);
