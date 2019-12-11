import React, { forwardRef } from "react";
import "./styles.css";

export default forwardRef(({ data, classValue }, ref) => {
  return (
    <div
      className={`item ${classValue}`}
      ref={ref}
      onClick={e =>
        console.table({
          target: e.target,
          data: data,
          classValue: classValue,
          refcurrent: ref.current
        })
      }
    >
      {data.text}
    </div>
  );
});
