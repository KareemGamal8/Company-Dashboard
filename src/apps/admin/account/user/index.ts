import cache from "@mongez/cache";
import {
  User as BaseUser,
  UserCacheDriverInterface,
  UserInterface,
  setCurrentUser,
} from "@mongez/user";

class User extends BaseUser implements UserInterface {
  /**
   * Cache driver
   */
  protected cacheDriver: UserCacheDriverInterface = cache;
  /**
   * Permissions enabled
   */
  protected permissionsEnabled = true;

  /**
   * {@inheritDoc}
   */
  public getCacheKey(): string {
    return "usr";
  }

  /**
   * Determine if current user is guest
   */
  public isGuest(): boolean {
    return this.get("userType") === "guest";
  }

  /**
   * Check if user has access to the given permission
   */
  public can(permission: string) {
    if (!this.permissionsEnabled) return true;

    return this.get(`group.permissions`, []).includes(permission);
  }

  /**
   * Deactivate permissions
   */
  public deactivatePermissions() {
    this.permissionsEnabled = false;

    return this;
  }
}

const user = new User();

// boot the class
user.boot();

// update current user instance to be used from other packages
setCurrentUser(user);

export default user;
