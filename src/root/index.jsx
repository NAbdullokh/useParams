import React from "react";
import { Routes, Route } from "react-router-dom";
import Element from "../components/Element";
import Navbar from "../components/Navbar";
import NavbarItems from "../mock/navbar";

const Root = () => {
  return (
    <div>
      <Routes>
        <Route element={<Navbar />}>
          {NavbarItems.map((value) => {
            return (
              <Route key={value.id} path={value.path} element={value.element} />
            );
          })}
          <Route path="/products/:title" element={<Element />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Root;
