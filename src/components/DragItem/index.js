import React, { useState, useRef } from "react";
import "../../styles.css";
import useDrag from "../../hooks/useDrag";
import View from "./view";

export default ({ dragEffect, data, key, id }) => {
  const dragRef = useRef();
  // uses the ref to apply the "grab" / "grabbing" classes onDragStart/onDragEnd
  const [classValue, setClassValue] = useState("grab");
  const { dragState } = useDrag({
    id,
    effect: dragEffect,
    ref: dragRef,
    onDragStart: () => setClassValue("grabbing"),
    onDragEnd: () => {
      setClassValue("grab");
    }
  });

  return <View ref={dragRef} data={data} classValue={classValue} />;
};
