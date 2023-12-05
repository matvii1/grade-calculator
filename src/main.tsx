import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";
import { Toaster } from "./common/components/ui/toaster.tsx";
import "./index.css";
import GradeProvider from "./app/context/GradeProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GradeProvider>
      <App />
    </GradeProvider>
    <Toaster />
  </React.StrictMode>,
);
