import React, { useState } from "react";
import "./RightSide.css";
import { Icon } from '@iconify/react';



const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="RightSide">
      <div className="navIcons">
        <Icon icon="ant-design:home-filled" color="#7a77ff" width="28" height="28" />

        <Icon icon="majesticons:door-exit" color="#7a77ff" height="28" />

        <Icon icon="pajamas:profile" color="#7a77ff" height="28" />
      </div>

    </div>
  );
};

export default RightSide;
