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

## Roadmap

- [ ] Docs
  - [ ] Next.js + MDX (see [Tailwind Starter Kit](https://github.com/estevanmaito/tailwind-starter-kit))
- [ ] Themes (separate themes into dark/light)
- [ ] Development live server (currently using Styleguidist; polutes the `src` directory)
- [ ] Scope Tailwind? Prefix? Use user config?
  - I'm inclined to create a root theme file, with all classes used, for every element. This way users can import it and extend/modify, but it would be used to let purge know which classes are being used. But what about custom theme configs, like the `shadow-outline` custom plugin, or extended styles? Maybe create a plugin that could be imported from this package also?

```js
//tailwind.config.js
// this is responsible for theme classes and could also be used for customization
import windmillTheme from 'windmill-react-ui/defaultTheme'
// solve the extension/custom styles problem
import windmillPlugin from 'windmill-react-ui/plugin'
purge: [windmillTheme],
plugins: [windmillPlugin()]
```

### Components

- [x] Button
- [ ] Card
- [ ] Dropdown
- [ ] Form
- [ ] Modal
- [ ] Table
- [ ] Avatar
- [ ] Transition
- [ ] Backdrop
- [ ] Badge

Things that are not in the plans for the near future and why:

#### Different button _states_ like 'danger', 'warning', 'pink', etc

It introduces unnecessary noise. If you feel you need a red button to tell users that something is dangerous, you're approaching the problem wrongfully.

- Colorblind people will see it in unpredictable colors;
- You're probably giving the user an option like: Delete your account? [cancel][delete]; Here you have a primary and a secondary action, where you can use something like a `link` or `outline` button for cancel and a normal, primary button for delete.
- If the action is too dangerous, you should implement additional confirmation, like a modal. Consider people have cats and they will step in their keyboards when focus is over the delete button. 🐱‍💻

#### New components

This library is so fresh, that if we just add new components now, we'll be just introducing bugs and bad design decisions into more code.

So, until we get to a point that the current components are in good shape and we have a clear vision of what a good component must have, we will just work on the existing component base.

How long will it take? A week, a month, it depends on the time I can put into it.

## Contributing

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
