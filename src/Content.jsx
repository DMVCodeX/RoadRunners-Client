import { Route, Routes } from "react-router-dom";
import { Marketplace } from "./Marketplace";
import { Home } from "./Home";

export function Content() {
  return (
    <Routes>
      <Route path="/marketplace" element={<Marketplace />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
