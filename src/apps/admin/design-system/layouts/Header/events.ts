import events from "@mongez/events";

function createToggledEvent(eventName: string) {
  return {
    onClose(callback: any) {
      return events.subscribe(eventName + ".close", callback);
    },
    close() {
      return events.trigger(eventName + ".close");
    },
    open() {
      return events.trigger(eventName + ".open");
    },
    onOpen(callback: any) {
      return events.subscribe(eventName + ".open", callback);
    },
  };
}

export const drawerEvents = createToggledEvent("sidebar");

export const updateProfileEvents = createToggledEvent("update-profile");
export const changePasswordEvents = createToggledEvent("change-password");
