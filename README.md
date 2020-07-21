# Windmill React UI

The component library for fast and accessible development of gorgeous interfaces.

<p>
  <a href="https://codecov.io/gh/estevanmaito/windmill-react-ui"><img src="https://codecov.io/gh/estevanmaito/windmill-react-ui/branch/master/graph/badge.svg" alt="codecov" /></a>
  <img src="https://github.com/estevanmaito/windmill-react-ui/workflows/Build/badge.svg" alt="Build" />
  <a href="https://www.npmjs.com/package/@windmill/react-ui"><img src="https://img.shields.io/npm/v/@windmill/react-ui" alt="npm" /></a>
  <a href="https://github.com/estevanmaito/windmill-react-ui/blob/master/LICENSE"><img src="https://img.shields.io/github/license/estevanmaito/windmill-react-ui" alt="MIT License" /></a>
</p>

Projects using it: [Windmill Dashboard React](https://github.com/estevanmaito/windmill-dashboard-react)

## Mission

Be the most accessible it can be out of the box and the fastest way to production.

[Go to docs to see complete, live examples](https://windmillui.com/react-ui)

## 🚀 Usage

Install

```sh
npm i @windmill/react-ui
```

Inside `tailwind.config.js`

```js
const windmill = require('@windmill/react-ui/config')
module.exports = windmill({
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
})
```

Then place `Windmill` at the root of your project (the order doesn't matter, as long as your application is inside).

```js
// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Windmill } from '@windmill/react-ui'

ReactDOM.render(
  <Windmill>
    <App />
  </Windmill>,
  document.getElementById('root')
)
```

Use components inside your project

```js
import { Button } from '@windmill/react-ui'

function App() {
  return <Button>Hi there!</Button>
}

export default App
```

## 🗺 Roadmap

- [ ] Development live server (currently using Styleguidist; polutes the `src` directory)

Things that are not in the plans for the near future and why:

#### New components

This library is so fresh, that if we just add new components now, we'll be just introducing bugs and bad design decisions into more code.

So, until we get to a point that the current components are in good shape and we have a clear vision of what a good component must have, we will just work on the existing component base.

How long will it take? A week, a month, it depends on the time I can put into it.

## 🔌 Contributing

- Fork
- Clone
- `npm install`
- `npm run dev`

It will start a local server at `localhost:6060` with all components rendered.

> This needs improvement. I'm looking for a better way to create a local dev server.

To see a new component rendered, add an `.md` file with the same name as the component (see current components), and add components inside like:

```js
<Button size="larger">Larger</Button>
```

⚠ Use `npm run cz` instead of `git commit`! It will guide you through some short questions and guarantee that you commit message is standardized.

Commit will also trigger linting and test coverage.
