import { atom, selector } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 102,
});

export const jobsAtom = atom({
  key: "jobsAtom",
  default: 0,
});

export const notificationsAtom = atom({
  key: "notificationsAtom",
  default: 12,
});

export const messagingAtom = atom({
  key: "messagingAtom",
  default: 0,
});

export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: (props) => {
    const networkAtomCount = props.get(networkAtom);
    const jobsAtomCount = props.get(jobsAtom);
    const notificationsAtomCount = props.get(notificationsAtom);
    const messagingAtomCount = props.get(messagingAtom);
    return (
      networkAtomCount +
      jobsAtomCount +
      notificationsAtomCount +
      messagingAtomCount
    );
  },
});
