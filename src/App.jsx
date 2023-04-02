import { BrowserRouter, Route, Routes } from "react-router-dom";

import NotFound from "./components/NotFound";
import MainLayout from "./layouts/Main";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainLayout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
