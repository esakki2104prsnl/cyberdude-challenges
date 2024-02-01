import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HeroData from "./components/HeroData";
import PreviewChat from "./components/PreviewChat";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className= "pb-10 bg-[url('https://e0.pxfuel.com/wallpapers/875/426/desktop-wallpaper-i-whatsapp-background-chat-whatsapp-graffiti.jpg')]">
    <HeroData />
    {/* <div className="flex-1">
      <PreviewChat />
    </div> */}
  </div>
);
