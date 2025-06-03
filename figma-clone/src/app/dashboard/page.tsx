"use client";

import { signout } from "../actions/auth";

export default function Page() {
  return (
    <div>
      <h1>HI</h1>
      <button onClick={() => signout()}>Sign out</button>
    </div>
  );
}
