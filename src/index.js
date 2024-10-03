import React from "react";
import ReactDOM from "react-dom/client";
import "./Style/global/style.css";
import MyRouter from "./Components/Router";
import "./Style/fontawesome.css";
import "./Style/brands.css";
import "./Style/regular.css";
import "./Style/solid.css";
import { ConfigProvider } from "antd";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ConfigProvider
    
    theme={{
      token: {
        colorText:"#fff"
      },
      components: {
        Pagination: {
          itemBg: "rgba(100, 80, 100, 0.9)",
          itemActiveBg:"#ffe"
        }
        
      },
    }}
  >
    <MyRouter />
  </ConfigProvider>
);
