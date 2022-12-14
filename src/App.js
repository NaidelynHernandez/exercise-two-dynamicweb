
import React from "react";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";


import "./App.css";
import Article from "./pages/article";

import List from "./pages/list";

const router = createBrowserRouter([
  {
    path: "/",
    element: <list /> 
  },
  {
    path:"/article",
    element: <Article /> 
  },
]);


function App() {
  return (
    <div className="App">
      
       <List /> 
    </div>
  );
}

export default App;
