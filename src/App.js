
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./routes/about";
import Profile from "./routes/profile";
import History from "./routes/history";
import Links from "./routes/links";
import Form from "./routes/form";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'https://tetra-mix.github.io/portfolio/'} element={<About />} />
        <Route path={'https://tetra-mix.github.io/portfolio/profile'} element={<Profile />} />
        <Route path={'https://tetra-mix.github.io/portfolio/history'} element={<History />} />
        <Route path={'https://tetra-mix.github.io/portfolio/links'} element={<Links />} />
        <Route path={'https://tetra-mix.github.io/portfolio/form'} element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;