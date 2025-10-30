import React from 'react';

const AnimatedEmoji = ({ emoji, animation = 'pulse', size = 'normal' }) => {
  const animationClass = {
    pulse: 'emoji-animated',
    heartbeat: 'emoji-heart',
    shake: 'emoji-stress',
    sparkle: 'emoji-money',
    think: 'emoji-brain',
    targetPulse: 'emoji-target',
    float: 'emoji-people',
    rotate: 'emoji-happy',
    bounce: 'bounce'
  };

  const sizeClass = {
    small: 'text-xl',
    normal: 'text-3xl',
    large: 'text-5xl',
    xlarge: 'text-7xl'
  };

  return (
    <span className={`${animationClass[animation] || 'emoji-animated'} ${sizeClass[size] || 'text-3xl'} opacity-80 hover:opacity-100 transition-opacity`}>
      {emoji}
    </span>
  );
};

export default AnimatedEmoji;