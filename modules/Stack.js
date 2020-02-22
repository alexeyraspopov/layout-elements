import React from 'react';
import omit from './omit';
import { isFlexGapSupported } from './isFlexGapSupported';

let reserved = [
  'as',
  'direction',
  'alignment',
  'spacing',
  'style',
  'className',
];

export let Stack = React.forwardRef((props, ref) => {
  let isGapSupported = isFlexGapSupported();
  let spacing = getSpacing(props.spacing);
  let style = Object.assign({ '--stack-spacing': spacing }, props.style);
  let className = [
    'stack',
    getDirection(props.direction),
    getAlignment(props.alignment),
    isGapSupported ? null : 'stack-fallback',
    props.className,
  ]
    .filter(Boolean)
    .join(' ');
  let fullProps = Object.assign(
    { ref, className, style },
    omit(props, reserved),
  );
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
