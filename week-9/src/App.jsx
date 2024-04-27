import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [disp, setDisp] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setDisp(!disp);
    }, 3000);
  }, [disp]);

  return <>{disp && <MyComponent />}</>;
}

function MyComponent() {
  useEffect(() => {
    // Perform setup or data fetching here

    

    return () => {
      // Cleanup code (similar to componentWillUnmount)

      
    };
  }, []);

  // Render UIr
  return <div>fdffsd</div>;
}
export default App;
