import cache from "@mongez/cache";
import { trans } from "@mongez/localization";
import {
  BulkDelete,
  DeleteButton,
  EditButton,
  moonlightTranslations,
  setMoonlightConfigurations,
} from "@mongez/moonlight";
import Helmet from "@mongez/react-helmet";
import {
  Link,
  currentRoute,
  navigateTo,
  queryString,
} from "@mongez/react-router";
import { localeCodesList } from "app/utils/localization";
import user from "apps/admin/account/user";
import URLS from "apps/admin/utils/urls";
import endpoint from "../endpoint";
import { googleMapApiKey } from "../flags";

setMoonlightConfigurations({
  errorParser(error, defaultParser) {
    if (!error?.response?.data?.errors) {
      return defaultParser(error);
    }
    const errorsList: string[] = [];
    for (const key in error.response.data.errors) {
      const errors = error.response.data.errors[key];
      errorsList.push(errors);
    }

    return errorsList;
  },
  localeCodes: localeCodesList,
  endpoint: endpoint,
  router: {
    currentRoute: currentRoute,
    navigateTo: navigateTo,
    notFoundRoute: URLS.notfound,
    queryString: {
      all: queryString.all.bind(queryString),
      get: queryString.get.bind(queryString),
      update: queryString.update.bind(queryString),
    },
  },
  cache: {
    handler: cache,
  },
  components: {
    link: Link,
    helmet: Helmet,
  },
  publishedColumn: {
    name: "isActive",
    label: "active",
  },
  reactiveForm: {
    singleRecordKey: "",
    defaultColSize: 6,
    openInModal: true,
    submitButton: {
      label: trans(moonlightTranslations.save),
    },
  },
  user: user,
  uploads: {
    route: "/uploads",
    resolveResponse(response) {
      return response.data.uploads || response.data.upload;
    },
  },
  google: {
    map: {
      apiKey: googleMapApiKey,
    },
  },
  table: {
    fetchRecord: true,
    bulkSelection: true,
    shortcuts: true,
    keys: {
      records: "data",
      record: "",
    },
    columnsSelections: true,
    bulkActions: [BulkDelete],
    displayHeader: true,
    actions: [EditButton, DeleteButton],
    paginationInfo(response) {
      return {
        limit: response.data.paginationInfo?.limit,
        results: response.data.paginationInfo?.result,
        page: response.data.paginationInfo?.page,
        pages: response.data.paginationInfo?.pages,
        total: response.data.paginationInfo?.total,
      };
    },
  },
});
