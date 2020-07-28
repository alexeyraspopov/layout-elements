import React from 'react';
import omit from './omit';

let reserved = ['as', 'aspectRatio', 'preserve', 'children', 'className'];

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
    : props.children;
  let fullProps = Object.assign(
    { ref, className, style },
    omit(props, reserved),
  );
  return React.createElement(props.as, fullProps, children);
});

Scene.defaultProps = {
  as: 'div',
  preserve: false,
};
