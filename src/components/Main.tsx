import { ReactNode } from "react";
import Header from "./Header";

export default function Main({
  children,
}: {
  children: ReactNode | ReactNode[];
}) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
