import React from 'react';
import omit from './omit';

let reserved = ['as', 'aspectRatio', 'preserve'];

export let Scene = React.forwardRef((props, ref) => {
  let style = Object.assign(
    { '--scene-aspect-ratio': props.aspectRatio },
    props.style,
  );
  let className = ['scene', props.className].filter(Boolean).join(' ');
  let children = props.preserve
    ? React.createElement('div', {
        className: 'scene-content',
        children: props.children,
      })
    : children;
  let fullProps = Object.assign(
    { ref, className, style, children },
    omit(props, reserved),
  );
  return React.createElement(props.as, fullProps);
});

Scene.defaultProps = {
  as: 'div',
  preserve: false,
};
