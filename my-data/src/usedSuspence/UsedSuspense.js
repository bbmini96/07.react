import { Suspense } from "react";
import User from "./User";
import fetchData from "../api/fetchData";


function UsedSuspense() {
  return (
    <main>
      <h2>Used Suspense</h2>
      <Suspense fallback={<p>User Loading...</p>}>
        {/* <User userId="1" /> */}
        <User resource={fetchData(1)} />
      </Suspense>
    </main>
  );
}


export default UsedSuspense;