import React, { useEffect, useState } from "react";

const Cpn_Expire = (props) => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      props.setMessageSuccess(false);
      setVisible(false);
    }, props.delay);
  }, [props.delay]);
  return visible ? <div>{props.children}</div> : <div />;
};

export default Cpn_Expire;
