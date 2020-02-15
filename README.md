# stack-layout

    npm install @alexeyraspopov/stack-layout

Layout primitive that abstracts flexbox in order to define the layout for
children components. See demo: https://alexeyraspopov.github.io/stack-layout/.

## Requirements

This package relies on and makes use of [CSS Variables (Custom Properties)](https://caniuse.com/#feat=css-variables) in runtime.

## Rationale

Abstraction on top of Flexbox for linear collections. No need to figure out
`justify-content`/`align-items` values, etc.

## Usage with React

```javascript
import React from 'react';
import Stack from '@alexeyraspopov/stack-layout';

function MyDataList({ items }) {
  return (
    <Stack direction="vertical" spacing={1} alignment="stretch">
      {items.map(item => (
        <MyItem data={item} />
      ))}
    </Stack>
  );
}
```

Make sure related stylesheet is bundled as well:

```css
@import url('@alexeyraspopov/stack-layout/style.css');
```

## Typings

The library includes Flow and TypeScripts type definitions. Mostly aiming at
correct props usage.
