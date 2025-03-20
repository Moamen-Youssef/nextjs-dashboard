import { Suspense } from "react";

export default function Page() {
  return <Suspense fallback={<p>Loading...</p>}>dashborad</Suspense>;
}
