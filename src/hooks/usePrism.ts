import Prism from "prismjs";
import "prismjs/components/prism-typescript";
import "prismjs/themes/prism-tomorrow.css";
import React from "react";

export const usePrism = () => {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);
};
