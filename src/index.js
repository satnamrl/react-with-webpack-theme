import React from "react";
import { createRoot } from "react-dom/client";
import Hello from "./components/Hello.jsx";
import "./assets/css/style.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Hello />);
