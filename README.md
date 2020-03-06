# layout-elements

    npm install layout-elements

## Requirements

This package relies on and makes use of [CSS Variables (Custom Properties)](https://caniuse.com/#feat=css-variables) in runtime.

## Rationale

Abstraction on top of Flexbox for linear collections. No need to figure out
`justify-content`/`align-items` values, etc.

## Usage

```javascript
import React from 'react';
import { Stack } from 'layout-elements';

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

```javascript
import React from 'react';
import { Scene } from 'layout-elements';

function MyDataVis() {
  return (
    <Scene aspectRatio={16 / 9} preserve>
      <svg>...</svg>
    </Scene>
  );
}
```

Make sure related stylesheet is bundled as well:

```css
@import url('layout-elements/style.css');
```

## Typings

The library includes Flow and TypeScripts type definitions. Mostly aiming at
correct props usage.
