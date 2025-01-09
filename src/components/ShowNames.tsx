import React from "react";
import { useShallow } from "zustand/react/shallow";
import { useStore } from "../main";

type IProps = {};

const ShowStateKeys: React.FC<IProps> = () => {
  const names = useStore(useShallow((state) => Object.keys(state)));

  return <div>{names.join(", ")}</div>;
};

export default ShowStateKeys;
