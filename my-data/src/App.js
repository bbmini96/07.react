import UnusedSuspense from "./unusedSuspense/UnusedSuspense";
import UsedSuspense from "./usedSuspence/UsedSuspense";


export default function App() {


  return (
    <div className="App">
      <h1>React Suspense</h1>
      {/* <UnusedSuspense /> */}
      <UsedSuspense />
    </div>
  );
}
