import router, { Route } from "@mongez/react-router";
import { Guardian, ReverseGuardian } from "app/account/middleware";
import AdminLayout from "design-system/layouts/BaseLayout/AdminLayout";
// import AccountLayout from "../design-system/layouts/AccountLayout";

/**
 * Should be used with public routes that allow both visitors and users to see it
 *
 * For Example: Home Page | Contact Us | About Us...
 */
export function publicRoutes(routes: Route[]) {
  return router.partOf(AdminLayout, routes);
}

/**
 * Should be used with routes that only logged in users can see it
 *
 * For Example, Account Dashboard Page | Order History | Wishlist
 */
export function guardedRoutes(routes: Route[]) {
  return router.group({
    layout: AdminLayout,
    middleware: [Guardian],
    routes,
  });
}

/**
 * Should be used with routes that only un-logged in users can access it
 * For example a logged in user can not access the /login route as he/she is already logged in
 * The Reverse guardian will redirect the user back to the home
 */
export function reverseGuardedRoutes(routes: Route[]) {
  return router.group({
    middleware: [ReverseGuardian],
    routes,
  });
}

/**
 * Should be used with guarded routes inside the account dashboard page
 * As the account dashboard routes will have similar layout, this is the preferred way to group them im one layout
 */
export function accountRoutes(routes: Route[]) {
  return router.group({
    middleware: [Guardian],
    routes,
  });
}
