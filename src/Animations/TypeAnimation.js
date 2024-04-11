import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const TypedAnimation = ({ sequence, speed, style, repeat }) => {
  return (
    <div>
      <TypeAnimation
        sequence={sequence}
        speed={speed}
        style={style}
        repeat={repeat}
      />
    </div>
  );
};

export default TypedAnimation;
