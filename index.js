import React from 'react';

let reserved = ['as', 'direction', 'alignment', 'spacing', 'style', 'className'];

/**
 * @param props.as
 * @param props.direction
 * @param props.alignment
 * @param props.spacing
 */
let Stack = React.forwardRef((props, ref) => {
  let spacing = getSpacing(props.spacing);
  let style = Object.assign({ '--stack-spacing': spacing }, props.style);
  let className = [
    'stack',
    getDirection(props.direction),
    getAlignment(props.alignment),
    isFlexGapSupported() || 'stack-fallback',
    props.className,
  ].filter(Boolean).join(' ');
  let fullProps = Object.assign({ ref, className, style }, omit(props, reserved));
  return React.createElement(props.as, fullProps);
});

Stack.defaultProps = {
  as: 'div',
  direction: 'vertical',
  alignment: 'stretch',
  spacing: 0,
};

function getSpacing(spacing, defaults) {
  switch (typeof spacing) {
    case 'number':
      return spacing + 'em';
    case 'string':
      return spacing;
  }
}

function getDirection(direction, defaults) {
  switch (direction) {
    case 'vertical':
      return 'stack-vertical';
    case 'horizontal':
      return 'stack-horizontal';
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
  }
}

function omit(source, excluded) {
  let result = {};
  for (let key of Object.keys(source)) {
    if (excluded.indexOf(key) >= 0) continue;
    result[key] = source[key];
  }
  return result;
}

let memoized = null;
function isFlexGapSupported() {
  if (memoized != null) return memoized;
  let container = document.createElement('div');
  container.style.cssText = 'display: flex; flex-direction: column; gap: 1px';
  container.appendChild(document.createElement('div'));
  container.appendChild(document.createElement('div'));
  document.body.appendChild(container);
  let isSupported = container.scrollHeight === 1;
  document.body.removeChild(container);
  memoized = isSupported;
  return isSupported;
}

export default Stack;
