import React from 'react';

let reserved = ['as', 'direction', 'alignment', 'spacing', 'style', 'children'];

/**
 * @param props.as
 * @param props.direction
 * @param props.alignment
 * @param props.spacing
 */
let Stack = React.forwardRef((props, ref) => {
  let element = props.as || 'div';
  let spacing = getSpacing(props.spacing);
  let style = Object.assign({ '--stack-spacing': spacing }, props.style);
  let direction = getDirection(props.direction);
  let alignment = getAlignment(props.alignment);
  let className = composeClassName('stack', direction, alignment, props.className);
  let fullProps = Object.assign({ ref, className, style }, omit(props, reserved));
  return React.createElement(element, fullProps, ...props.children);
});

function getSpacing(spacing, defaults) {
  switch (typeof spacing) {
    case 'number':
      return spacing + 'em';
    case 'string':
      return spacing;
    default:
      return 0;
  }
}

function getDirection(direction, defaults) {
  switch (direction) {
    case 'vertical':
      return 'stack-vertical';
    case 'horizontal':
      return 'stack-horizontal';
    default:
      return 'stack-vertical';
  }
}

function getAlignment(alignment, defaults) {
  switch (alignment) {
    case 'start':
      return 'stack-start';
    case 'center':
      return 'stack-center';
    case 'end':
      return 'stack-end';
    case 'stretch':
      return 'stack-stretch';
    default:
      return 'stack-stretch';
  }
}

function composeClassName(...classes) {
  return classes.filter(Boolean).join(' ');
}

function omit(source, excluded) {
  let result = {};
  for (let key of Object.keys(source)) {
    if (excluded.indexOf(key) >= 0) continue;
    result[key] = source[key];
  }
  return result;
}

export default Stack;
