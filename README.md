# Windmill React UI

The Tailwind CSS React component library

<p>
  <a href="https://codecov.io/gh/estevanmaito/windmill-react-ui"><img src="https://codecov.io/gh/estevanmaito/windmill-react-ui/branch/master/graph/badge.svg" alt="codecov" /></a>
  <a href="https://travis-ci.com/github/estevanmaito/windmill-react-ui"><img src="https://img.shields.io/travis/estevanmaito/windmill-react-ui" alt="Travis (.org)" /></a>
  <a href="https://www.npmjs.com/package/windmill-react-ui"><img src="https://img.shields.io/npm/v/mywindmill-react-ui" alt="npm" /></a>
  <a href="https://github.com/estevanmaito/windmill-react-ui/blob/master/LICENSE"><img src="https://img.shields.io/github/license/estevanmaito/windmill-react-ui" alt="MIT License" /></a>
</p>

Projects using it: [Windmill Dashboard React](https://github.com/estevanmaito/windmill-dashboard-react)

- [Roadmap](#roadmap)

## Mission

Be the most accessible it can be out of the box and the fastest way to production.

## 🚀 Usage

Install

```sh
npm i windmill-react-ui
```

Place `Windmill` at the root of your project (the order doesn't matter, as long as your application is inside).

```js
// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Windmill } from 'windmill-react-ui'

ReactDOM.render(
  <Windmill>
    <App />
  </Windmill>,
  document.getElementById('root')
)
```

Use components inside your project

```js
import { Button } from 'windmill-react-ui'

function App() {
  return <Button>Hi there!</Button>
}

export default App
```

### Changing styles and theme

`Windmill` accepts two properties: `dark` and `theme`. With `theme` you can provide your own theme:

```diff
import { Windmill } from 'windmill-react-ui'
+ import myTheme from './myTheme.js'

ReactDOM.render(
- <Windmill>
+ <Windmill theme={myTheme}>
    <App />
  </Windmill>,
  document.getElementById('root')
)
```

Note that your theme will be merged to the default theme, so you just need to change the properties you want (or everything if that fits you).

While `dark` is a boolean property that just applies the `dark` theme. You should use this if you want just the dark theme applied to your project.

### Dynamic theme changing

Import a helper that just toggles the theme, between light and dark. Inside your component:

```diff
import { Button } from 'windmill-react-ui'
+ import { toggleTheme } from 'windmill-react-ui/themes'

function App() {
-  return <Button>Hi there!</Button>
+  return <Button onClick={toggleTheme}>Change theme</Button>
}

export default App
```

### Purge

TODO

- How to import default themes and pass it into purge
- How to add own theme to purge

## 🗺 Roadmap

- [ ] Development live server (currently using Styleguidist; polutes the `src` directory)

```js
//tailwind.config.js
// this is responsible for theme classes and could also be used for customization
import windmillTheme from 'windmill-react-ui/defaultTheme'
// solve the extension/custom styles problem
import windmillPlugin from 'windmill-react-ui/plugin'
purge: [windmillTheme],
plugins: [windmillPlugin()]
```

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

To see a new component rendered, add an `.md` file with the same name as the component (see current components), and add components inside like:

```js
<Button size="larger">Larger</Button>
```

⚠ Use `npm run cz` instead of `git commit`! It will guide through some short questions and guarantee that you commit message is standardized.

Commit will also trigger linting and test coverage.
