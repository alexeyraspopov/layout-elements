export as namespace StackLayout;
import * as React from 'react';

export default class Stack extends React.Component<{
  as?: React.ComponentType,
  direction?: 'vertical' | 'horizontal',
  alignment?: 'start' | 'center' | 'end' | 'stretch',
  spacing?: number | string,
  children: React.Node,
}> {}
