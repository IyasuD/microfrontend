import { mount } from "marketing/MarketingApp";
import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
//name of a component can be optional
//makes the container independent from library/framework
//makes decoupling easy
export default () => {
  const ref = useRef(null);
  const history = useHistory();
  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        // console.log("The container noticed navigation in marketing");
        //console.log(nextPathname);
        //prevent infinite update
        const { pathname } = history.location;
        if (pathname !== nextPathname) history.push(nextPathname);
      },
    });
   history.listen(onParentNavigate)

  }, []);
  return <div ref={ref} />;
};
