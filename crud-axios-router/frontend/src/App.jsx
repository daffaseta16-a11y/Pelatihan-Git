import "./App.css";
import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router";
import MainLayout from "./layout/mainLayout";
import Home from "./pages/Home";
import CrudAxios from "./pages/CrudAxios";
import NoMatch from "./pages/NoMatch";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="CrudAxios" element={<CrudAxios />} />

            {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

