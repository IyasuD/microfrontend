import { mount } from "marketing/MarketingApp";
import React, { useRef, useEffect } from "react";

//name of a component can be optional
//makes the container independent from library/framework
//makes decoupling easy
export default () => {
  const ref = useRef(null);
  useEffect(() => {
    mount(ref.current);
  }, []);
  return <div ref={ref} />;
};
