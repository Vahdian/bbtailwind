import React from "react";

export default function AppPage() {
  return (
    <div>
      <div className="flex justify-center items-center h-full flex-col sm:mt-40">
        <h1 className="text-xl font-bold mt-40">
          Our app will be available soon at:
        </h1>
        <img
          className="h-40"
          src="https://www.seekpng.com/png/detail/34-349265_app-store-google-play-svg.png" alt="apple store"
        ></img>
      </div>
    </div>
  );
}
