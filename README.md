# stack-layout

Layout primitive that abstracts flexbox in order to define the layout for children components.

## Requirements

This package relies on or makes use of

- [CSS Variables (Custom Properties)](https://caniuse.com/#feat=css-variables)
- [ECMAScript 2015](https://kangax.github.io/compat-table/es6/)

## Rationale

Abstraction on top of Flexbox for linear collections. No need to figure out
`justify-content`/`align-items` values, etc.

## Usage with React

```javascript
import React from 'react';
import Stack from 'stack-layout';

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
@import url('stack-layout/style.css');
```
