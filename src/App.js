
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./routes/about";
import Profile from "./routes/profile";
import History from "./routes/history";
import Links from "./routes/links";
import Form from "./routes/form";


const App = () => {
  return (
    <BrowserRouter basename="https://tetra-mix.github.io/portfolio">
      <Routes>
        <Route path={'/'} element={<About />} />
        <Route path={'/profile'} element={<Profile />} />
        <Route path={'/history'} element={<History />} />
        <Route path={'/links'} element={<Links />} />
        <Route path={'/form'} element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;