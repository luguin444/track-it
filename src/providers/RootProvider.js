import React from "react";
import MyProvider from "providers/MyProvider";

export default function RootProvider({ children }) {
  return <MyProvider>{children}</MyProvider>;
}
