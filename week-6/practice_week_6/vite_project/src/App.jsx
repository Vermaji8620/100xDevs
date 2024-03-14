// useMemo() and useCallBack()
import "../src/App.css";
import { memo, useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

// const Exp = ({ id }) => {
//   const [loading, setLoading] = useState({});
//   console.log(loading);
//   useEffect(() => {
//     //   setInterval(() => {
//     (async () => {
//       const data = await fetch(`https://sum-server.100xdevs.com/todo?id=${id}`);
//       let res = await data.json();
//       res = res.todo;
//       console.log(res);
//       setLoading(res);
//     })();
//     //   }, 3000);
//   }, [id]);

//   return (
//     <div>
//       {/* <button onClick={func}>click me</button> */}
//       {/* {loading &&
//         loading.map((item, index) => (
//           <div key={index}>
//             {
//               <div>
//                 <div>{item.title}</div>
//                 <div>{item.description}</div>
//                 <div>{item.completed}</div>
//               </div>
//             }
//           </div>
//         ))} */}
//       {loading.title} <br /> {loading.description}
//     </div>
//   );
// };

// const Render = () => {
//   const [val, setVal] = useState("1");
//   return (
//     <div>
//       <div
//         style={{
//           display: "flex",
//           gap: "10px",
//           marginBottom: "50px",
//           marginTop: "30px",
//         }}
//       >
//         <button value={1} onClick={(e) => setVal(e.target.value)}>
//           button 1
//         </button>
//         <button value={2} onClick={(e) => setVal(e.target.value)}>
//           button 2
//         </button>
//         <button
//           value={3}
//           onClick={(e) => {
//             setVal(e.target.value);
//           }}
//         >
//           button 3
//         </button>
//         <button value={4} onClick={(e) => setVal(e.target.value)}>
//           button 4
//         </button>
//       </div>
//       <Exp id={val} />
//     </div>
//   );
// };

// const App = () => {
//   return <Render />;
// };

// Exp.propTypes = {
//   id: PropTypes.string.isRequired,
// };

const App = () => {
  const [count, setCount] = useState(0);
  const fic = useCallback(() => {
    console.log(" i am logging");
  }, []);
  return (
    <div>
      <ButtonComponent fic={fic} />
      {/* <ButtonComponent count={count} /> */}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me {count}{" "}
      </button>
    </div>
  );
};

// jab component pura ka pura mount hota hai, to pura shuru se render hota hai, but jo v component me koi v change nahi ho raha hai, usko bina matlab ka wapis se mount krke kya fayda? to jo memo use krte hai ki agar is component me koi change hua hai tabhi ye wale component ko re-render krna ...nahi to nahi

//
const ButtonComponent = memo(({ fic }) => {
  // const ButtonComponent = memo(({ count }) => {
  console.log("child render");
  // console.log(count);
  fic();
  return (
    <div>
      <button>Button clicked</button>
    </div>
  );
});
ButtonComponent.displayName = "ButtonComponent";

ButtonComponent.propTypes = {
  count: PropTypes.number,
  fic: PropTypes.func,
};
export default App;
