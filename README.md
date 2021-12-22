# Learning [open-props](https://github.com/argyleink/open-props) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://github.com/hchiam/learning-template/blob/main/LICENSE)

Just one of the things I'm learning. https://github.com/hchiam/learning

https://open-props.style

https://github.com/argyleink/open-props

## Demos

Locally: `yarn start` or just `yarn dev` will open http://localhost:1234/

or

Live: https://learning-open-props.surge.sh

or

Live + editable: https://codesandbox.io/s/github/hchiam/learning-open-props

## Setup

```html
<link rel="stylesheet" href="https://unpkg.com/open-props"/>
```

or

```css
@import "https://unpkg.com/open-props";
```

which gives you CSS variables that can be used in regular CSS like this:

```css
html {
  --text-1: var(--gray-9);
  --text-2: var(--gray-7);

  @media (--OSdark) {
    --text-1: var(--gray-1);
    --text-2: var(--gray-2);
  }
}

.push-out {
  /* Did you know you can combine animations in native CSS? */
  animation: var(--animation-scale-down), var(--animation-fade-out);
  animation-timing-function: var(--ease-squish-4);
}

.card {
  border-radius: var(--radius-2);
  padding: var(--size-fluid-3);
  box-shadow: var(--shadow-2);

  &:hover {
    box-shadow: var(--shadow-3);
  }

  @media (--motionOK) {
    animation: var(--animation-fade-in);
  }
}

.blob {
  border-radius: var(--radius-blob-4);
}
```
