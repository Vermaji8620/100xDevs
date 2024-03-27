// atom is for initialising a value and then the selector is for the function, so here when i need to initialise the atom with the value that needs to come from the server, so I need to use selector

import axios from "axios";
import { atom, selector } from "recoil";

export const notifications = atom({
  key: "notificationsAtom",
  // in this way, the rendering happens some time after the default value gets rendered, so we will be using selectors inside of the atom.
  // default: {
  // network: 0,
  // jobs: 0,
  // notifications: 1510,
  // messaging: 10,
  // },

  default: selector({
    key: "networkAtomSelector",
    get: async () => {
      const res = await axios("https://sum-server.100xdevs.com/notifications");
      return await res.data;
    },
  }),
});

export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const allNotifications = get(notifications);
    return (
      allNotifications.network +
      allNotifications.jobs +
      allNotifications.notifications +
      allNotifications.messaging
    );
  },
});
