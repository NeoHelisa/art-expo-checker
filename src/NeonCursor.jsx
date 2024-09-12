import React from 'react';
import AnimatedCursor from 'react-animated-cursor';

const NeonCursor = () => {
  return (
    <AnimatedCursor
      innerSize={16}
      outerSize={16}
      color='129, 0, 20'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={3}
      trailingSpeed={8}
      outerStyle={{
        mixBlendMode: 'exclusion'
      }}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
  );
};

export default NeonCursor;
