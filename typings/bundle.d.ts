export as namespace StackLayout;
import * as React from 'react';

export class Stack extends React.Component<{
  as?: React.ComponentType;
  direction?: 'vertical' | 'horizontal';
  alignment?: 'start' | 'center' | 'end' | 'stretch';
  spacing?: number | string;
  children: React.Node;
}> {}

export class Scene extends React.Component<{
  as?: React.ComponentType;
  aspectRatio: number;
  children: React.Node;
}> {}
