import { Route, Routes } from "react-router-dom";
import { Marketplace } from "./Marketplace";

export function Content() {
  return (
    <Routes>
      <Route path="/marketplace" element={<Marketplace />} />
    </Routes>
  );
}
