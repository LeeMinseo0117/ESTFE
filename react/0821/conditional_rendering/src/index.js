import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import App from "./App2";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);