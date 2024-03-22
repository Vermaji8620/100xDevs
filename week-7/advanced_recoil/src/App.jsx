import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import "./App.css";
import { notifications, totalNotificationSelector } from "./Atoms";
// import { useEffect } from "react";
// import axios from "axios";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

const MainApp = () => {
  const [networkCount, setNetworkCount] = useRecoilState(notifications);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  // yaha pe there is a small flash of values coming from the recoil default value, and then the axios call is made to fetch the data from the backend, thus rendering the exact value, but this should not happen. So, ....(written in Atoms.jsx recoil file)
  // useEffect(() => {
  //   axios("https://sum-server.100xdevs.com/notifications").then((res) =>
  //     setNetworkCount(res.data)
  //   );
  // });

  return (
    <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
      <button>Home</button>
      <button>My networks({networkCount.network}) </button>
      <button>Jobs({networkCount.jobs})</button>
      <button>Messaging({networkCount.messaging})</button>
      <button>Notifications({networkCount.notifications})</button>
      <button>Me({totalNotificationCount})</button>
    </div>
  );
};

export default App;
