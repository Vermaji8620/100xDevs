import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import "./App.css";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationsAtom,
  totalNotificationSelector,
} from "./atoms";

function App() {
  return (
    <RecoilRoot>
      <MainApp />;
    </RecoilRoot>
  );
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificationsAtomCount = useRecoilValue(notificationsAtom);
  const [messagingAtomCount, setmessagingAtomCount] =
    useRecoilState(messagingAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return (
    <div>
      <button>Home</button>
      <button>
        My network (
        {networkNotificationCount >= 100 ? "99+" : networkNotificationCount})
      </button>
      <button>Jobs ()</button>
      <button>Messaging ()</button>
      <button>Notifications ()</button>
      <button
        onClick={() => {
          messagingAtomCount + 1;
        }}
      >
        Me ({totalNotificationCount})
      </button>
    </div>
  );
}
export default App;
