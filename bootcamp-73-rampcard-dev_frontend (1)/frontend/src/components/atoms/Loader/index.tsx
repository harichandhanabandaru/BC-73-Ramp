import React from "react";

import "./styles.css";

interface LoaderProps {
  src: string;
  alt: string;
  height? :string;
}

const Loader = (props: LoaderProps) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: props.height ? props.height :"100vh",
      }}
      data-testid = "Loader"
    >
      <img src={props.src} alt={props.alt} className="spinner" data-testid = "LoaderImg" />
    </div>
  );
};
export default Loader;
