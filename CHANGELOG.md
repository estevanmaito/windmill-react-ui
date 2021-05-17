# [0.6.0](https://github.com/estevanmaito/windmill-react-ui/compare/0.6.0-beta.0...0.6.0) (2021-05-17)

This is the last version before 1.0. It already introduces some breaking changes from 0.5.x, but if you just want some base components on top of Tailwind 2.0, this is what you're looking for.

If you need pre Tailwind v2 support, go for 0.5.1.

### BREAKING CHANGES

- Upgrade Tailwind CSS to v2
- Remove `tailwindcss-multi-theme` plugin
  - This would only be a problem for you if you're using your own solution for theme handling (not using `usePreferences` or `dark`), as we move from `theme-dark` and `theme-light` to Tailwind's own solution: `darkMode: 'class',`, which just adds `dark` to `body` as a class.
- Upgrade forms plugin

# [0.6.0-beta.0](https://github.com/estevanmaito/windmill-react-ui/compare/0.5.1...0.6.0-beta.0) (2021-05-15)

### Bug Fixes

- **dark theme:** add dark variants to tailwind ([6e0bcd3](https://github.com/estevanmaito/windmill-react-ui/commit/6e0bcd32688924584f0a3edcab6bb7b908c3dda4))
- **dark theme:** fix focus ring for dark theme ([8095735](https://github.com/estevanmaito/windmill-react-ui/commit/8095735ab40b42b79ac0e8e5cbda695720dbdf72))
- **dark theme:** use tailwind default `dark` class to apply theme ([4c42027](https://github.com/estevanmaito/windmill-react-ui/commit/4c420279078c7a75589fed5df3a458dbffbabd03))
- **package.json:** add tailwind build before run storybook ([#37](https://github.com/estevanmaito/windmill-react-ui/issues/37)) ([6536826](https://github.com/estevanmaito/windmill-react-ui/commit/653682637554f175c7d9e0e8f7f81c3f854f2d0f))

### Features

- **dependencies:** upgrade dependencie ([0305963](https://github.com/estevanmaito/windmill-react-ui/commit/0305963609a958561223bb352ffbae856bda571a))

### BREAKING CHANGES

- **dependencies:** upgrade Tailwind to v2; remove multi-theme plugin; upgrade forms plugin;

## [0.5.1](https://github.com/estevanmaito/windmill-react-ui/compare/0.5.0...0.5.1) (2021-02-06)

- **forms**: fix prop extension to allow usage of element attributes eg. name, on `input`, `select` and `textarea`.

# [0.5.0](https://github.com/estevanmaito/windmill-react-ui/compare/0.4.1...0.5.0) (2020-12-02)

### Bug Fixes

- **components:** add documentation for every property, for every component ([adb7bb8](https://github.com/estevanmaito/windmill-react-ui/commit/adb7bb8c33ed350c8cb6cc4bb9abfa35da631a9f))
- **events:** update event listeners to capture events ([997f8f8](https://github.com/estevanmaito/windmill-react-ui/commit/997f8f8e80d370a96e91567d2f9921767530c8a2)), closes [#20](https://github.com/estevanmaito/windmill-react-ui/issues/20)

## [0.4.1](https://github.com/estevanmaito/windmill-react-ui/compare/0.4.0...0.4.1) (2020-11-08)

### Bug Fixes

- **alert:** actually export the Alert ([ccade2c](https://github.com/estevanmaito/windmill-react-ui/commit/ccade2c73fadf6ad620e249a7850b21725aa320c))
- **pagination:** fix pagination update when totalResults or resultsPerPage change ([fbedd18](https://github.com/estevanmaito/windmill-react-ui/commit/fbedd18572d64cbbc5d292d7cb8ffc0636e9ef29))

# [0.4.0](https://github.com/estevanmaito/windmill-react-ui/compare/0.3.1...0.4.0) (2020-11-08)

### Features

- **alert:** add alert component ([b0855c7](https://github.com/estevanmaito/windmill-react-ui/commit/b0855c7152f71618c548876a64ccc5573e65c509))
- **TypeScript rewrite**

# [0.4.0-beta.0](https://github.com/estevanmaito/windmill-react-ui/compare/0.3.1...0.4.0-beta.0) (2020-10-26)

### Bug Fixes

- **button:** fix gradient style applied to anchor buttons due to type ([131bd69](https://github.com/estevanmaito/windmill-react-ui/commit/131bd69580622a98e4fddabe2330db812648c1a1)), closes [#7](https://github.com/estevanmaito/windmill-react-ui/issues/7)
- **component:** add event handlers to button props ([90a3d69](https://github.com/estevanmaito/windmill-react-ui/commit/90a3d694dd82e99b8169b17c4f080c8fa994b65a))
- **packages:** update dependencies ([330a535](https://github.com/estevanmaito/windmill-react-ui/commit/330a53547028ee42da16cbb4d02157268df6e6a2))

## [0.3.2](https://github.com/estevanmaito/windmill-react-ui/compare/0.3.1...0.3.2) (2020-08-08)

### Bug Fixes

- **button:** fix gradient style applied to anchor buttons due to type being incorrectly inherited from button defaults ([131bd69](https://github.com/estevanmaito/windmill-react-ui/commit/131bd69580622a98e4fddabe2330db812648c1a1)), closes [#7](https://github.com/estevanmaito/windmill-react-ui/issues/7)

## [0.3.1](https://github.com/estevanmaito/windmill-react-ui/compare/0.3.0...0.3.1) (2020-07-21)

### Bug Fixes

- **config:** fix purge content and add lib to npm published files ([abf8c24](https://github.com/estevanmaito/windmill-react-ui/commit/abf8c2425e13001700791fe0ed5cbee097dd2267))

# [0.3.0](https://github.com/estevanmaito/windmill-react-ui/compare/0.2.0...0.3.0) (2020-07-21)

### Build System

- **scope:** use `@windmill` as scope ([e6862da](https://github.com/estevanmaito/windmill-react-ui/commit/e6862dab1744bc94b3a94ce8774bd93a010862af))

### BREAKING CHANGES

- **scope:** Use `@windmill/react-ui` to install the package as `windmill-react-ui` is deprecated.

# [0.2.0](https://github.com/estevanmaito/windmill-react-ui/compare/0.1.2...0.2.0) (2020-07-20)

### Bug Fixes

- **form:** fix 1px off input and select ([4a3bc13](https://github.com/estevanmaito/windmill-react-ui/commit/4a3bc133f7b81744f0869b65deb136d2ed5516d1))

### BREAKING CHANGES

- **form:** Regular Inputs and Selects had a height of 39px, which looked terrible when used
  side-by-side with a regular button (38px height). Reducing the `line-height` to `leading-5` solved
  it, and now regular inputs and selects have a 38px height.

## [0.1.2](https://github.com/estevanmaito/windmill-react-ui/compare/0.1.2-beta.0...0.1.2) (2020-07-19)

### Bug Fixes

- **avatar:** add forwarRef to avatar ([3e3c8a6](https://github.com/estevanmaito/windmill-react-ui/commit/3e3c8a615d76ba52b3a2739caf2ca6cee7e2908c))
- **backdrop:** add forwardRef to backdrop ([6657d52](https://github.com/estevanmaito/windmill-react-ui/commit/6657d52a03e84b8805d8ea7ea71af719694a7d45))
- **components:** add forwardRef to all components that were missing ([fb240a2](https://github.com/estevanmaito/windmill-react-ui/commit/fb240a24da991b2a486765850e839cca5d7bbf39))
- **variants:** add default variants ([217a1d8](https://github.com/estevanmaito/windmill-react-ui/commit/217a1d8922ab18a7fe0e010b2e2cc34a4c27f460))

### BREAKING CHANGES

- **components:** All components now support ref forwarding.

## [0.1.2-beta.0](https://github.com/estevanmaito/windmill-react-ui/compare/0.1.1...0.1.2-beta.0) (2020-07-17)

### Features

- **config:** add a global config wrapper ([6a6de16](https://github.com/estevanmaito/windmill-react-ui/commit/6a6de16190479fabc2613077f1844c97716190ad))

### BREAKING CHANGES

- **config:** Instead of adding Windmill files to `purge` or to `plugins`, now you only need to
  encapsulate your Tailwind config using this wrapper. It will automatically add what Windmill needs
  to work properly and you can use your `tailwind.config.js` file as before, as it will be merged.

## [0.1.1](https://github.com/estevanmaito/windmill-react-ui/compare/0.1.0...0.1.1) (2020-07-14)

### Bug Fixes

- **defaulttheme:** export an object instead of string ([9a720e5](https://github.com/estevanmaito/windmill-react-ui/commit/9a720e5db588653977107684dfa4ec4bd04fa930))

# [0.1.0](https://github.com/estevanmaito/windmill-react-ui/compare/0.1.0-alpha.14...0.1.0) (2020-07-13)

### Bug Fixes

- **backdrop:** use z index 40 ([48c4348](https://github.com/estevanmaito/windmill-react-ui/commit/48c4348e6503296ddddabe5a44211f9302d88826))
- **card:** hide card overflow ([7cfa036](https://github.com/estevanmaito/windmill-react-ui/commit/7cfa036f453e33d82b1f8d554278fe7f5b754b83))
- **dropdown:** fix dropdown event handlers dependencies ([8490872](https://github.com/estevanmaito/windmill-react-ui/commit/84908725fbfe47f465b7ab2458ff6f535efb060e))
- **pagination:** add base text styles to pagination ([9258df1](https://github.com/estevanmaito/windmill-react-ui/commit/9258df1f630eecd811220cd4807172fcfd4552b1))

### Features

- **defaulttheme:** add defaultTheme export for purge ([22ac723](https://github.com/estevanmaito/windmill-react-ui/commit/22ac72365c6a565802aab592f5aac1f97c764702))
- **dropdown:** add align prop to dropdown ([7297426](https://github.com/estevanmaito/windmill-react-ui/commit/7297426205f85eaeaf1644085d5a8e0b4562a618))
- **windmill:** add usePreferences to windmill ([a619a28](https://github.com/estevanmaito/windmill-react-ui/commit/a619a283afb8829fd6659c788261fbca8197b37f))

### BREAKING CHANGES

- **pagination:** Pagination now has its own text colors, instead of depending on parent styles or
  own classes. It makes it useful outside elements like TableFooter, which would add text styles
  before. The breaking change is that it doesn't inherit TableFooter (or any parent) colors anymore.
- **windmill:** Now you need to use the prop `usePreferences` in the root Windmill component if you
  want access to theme utilities like the current theme or theme toggler, user preferences and user
  theme storage. These features were enabled by default before. You get the old behavior just adding
  `usePreferences` to the root Windmill component.
- **dropdown:** Dropdown now accepts an align prop that can be 'right' or 'left'. It now defaults
  to 'left' if align is not used, which is the natural align of the DOM, instead of the old right
  alignment. Change your dropdowns to align="right" if you were using the old default style.

# [0.1.0-alpha.14](https://github.com/estevanmaito/windmill-react-ui/compare/0.1.0-alpha.13...0.1.0-alpha.14) (2020-07-10)

### Bug Fixes

- **button:** fix link button active state ([cb0877e](https://github.com/estevanmaito/windmill-react-ui/commit/cb0877e19b2064a1556756da2b3ed6499ff1c8f6))

### Features

- **button:** add icon prop to button ([62453c1](https://github.com/estevanmaito/windmill-react-ui/commit/62453c19b9ba007fe40d634b9c9fa934220ca1bd))
- **dropdown:** add outside click handler ([c316cd4](https://github.com/estevanmaito/windmill-react-ui/commit/c316cd44ceadfc11be021308f977396eb282baba))
- **table:** remove styles from TableRow and apply to TableBody ([f5051c2](https://github.com/estevanmaito/windmill-react-ui/commit/f5051c216a3f776f09df85e397afb661cdaa97f5))

### BREAKING CHANGES

- **dropdown:** You don't need to provide an outside click handler to close the dropdown anymore as
  it's now done internally calling the passed onClose prop
- **table:** TableRow could only be used inside TableBody because it would apply styles that
  would overwirte TableHead, like text colors. Now these styles live only inside TableBody, leaving
  TableRow without styles, even though it's entry is still in defaultTheme for further theme
  customization.

# [0.1.0-alpha.13](https://github.com/estevanmaito/windmill-react-ui/compare/0.1.0-alpha.12...0.1.0-alpha.13) (2020-07-09)

### Bug Fixes

- **form:** fix dark validation styles for input and textarea ([39af5d1](https://github.com/estevanmaito/windmill-react-ui/commit/39af5d1a9fc17c68e730f4ace177a9fcd62fa292))

### Features

- **select:** add disabled attribute ([d429e7a](https://github.com/estevanmaito/windmill-react-ui/commit/d429e7aa6ccbf0476509fe65ed3fb1f24024a613))
- **select:** add validation styles ([71d4dfe](https://github.com/estevanmaito/windmill-react-ui/commit/71d4dfe4f4c453ecb0be53ce5331f3183055c6e0))
- **textarea:** add validation and disabled styles ([6108c06](https://github.com/estevanmaito/windmill-react-ui/commit/6108c06584f4f3a91af587aee4963b3e50021abd))

# [0.1.0-alpha.12](https://github.com/estevanmaito/windmill-react-ui/compare/0.1.0-alpha.11...0.1.0-alpha.12) (2020-07-08)

### Bug Fixes

- **modal:** do not render modal if it is not on client ([2cbe55a](https://github.com/estevanmaito/windmill-react-ui/commit/2cbe55a61862456c650d1c2bc4f30f8874dabd67))
- **plugin:** use opacity from theme for backgroundOpacity ([1c2931f](https://github.com/estevanmaito/windmill-react-ui/commit/1c2931f018f8f3af4ab0f84220aebfbc70af93bb))

# [0.1.0-alpha.11](https://github.com/estevanmaito/windmill-react-ui/compare/0.1.0-alpha.10...0.1.0-alpha.11) (2020-07-08)

### Bug Fixes

- **badge:** add flex styles to badge ([bf7c412](https://github.com/estevanmaito/windmill-react-ui/commit/bf7c412c0baf28079f8faeb143251f3efc0f904e))
- **plugin:** fix backgroundOpacity variant overwrite ([d843446](https://github.com/estevanmaito/windmill-react-ui/commit/d84344612bf7f3dec6ed3dbcb6feeb789d787769))

### BREAKING CHANGES

- **badge:** it now behaves as inline-flex instead of default inline span. py-1 was also removed
  in favor of leading increase, so it better aligns in the center of the pill.

# [0.1.0-alpha.10](https://github.com/estevanmaito/windmill-react-ui/compare/0.1.0-alpha.9...0.1.0-alpha.10) (2020-07-06)

### Bug Fixes

- **plugin:** fix call stack on backgroundOpacity ([a9b9038](https://github.com/estevanmaito/windmill-react-ui/commit/a9b90380c8d349417f3c190abd00f2b36985c06c))

# [0.1.0-alpha.9](https://github.com/estevanmaito/windmill-react-ui/compare/0.1.0-alpha.8...0.1.0-alpha.9) (2020-07-06)

### Bug Fixes

- **avatar:** add inline-block to avatar ([c1d4dc1](https://github.com/estevanmaito/windmill-react-ui/commit/c1d4dc115e6e9aa2a74c376f769eb50e284da524))
- **backdrop:** increase backdrop z-index ([951c489](https://github.com/estevanmaito/windmill-react-ui/commit/951c48946d663d1b9071b3d2073bcfcb8a06882a))
- **button:** fix link style for dark buttons ([1002423](https://github.com/estevanmaito/windmill-react-ui/commit/1002423618d29ef8cab320b629c762f3d2b7d408)), closes [#4](https://github.com/estevanmaito/windmill-react-ui/issues/4)
- **dark mode:** fix window not being available on SSR ([af2d464](https://github.com/estevanmaito/windmill-react-ui/commit/af2d46409ed719a7103f50d8915440082fd02787))

### Code Refactoring

- **avatar:** use src instead of img ([e988424](https://github.com/estevanmaito/windmill-react-ui/commit/e98842497c588b5bd33b4feedd5ad6beb8d9f771))

### BREAKING CHANGES

- **avatar:** Avatar now uses src instead of img to pass the image src
- **avatar:** add inline-block
- **button:** different colors for dark mode
- **backdrop:** z-index increased from 10 to 50

# [0.1.0-alpha.8](https://github.com/estevanmaito/windmill-react-ui/compare/0.1.0-alpha.7...0.1.0-alpha.8) (2020-06-30)

### Bug Fixes

- **defaulttheme:** export defaultTheme as Common JS and remove deprecated theme toggler ([d60e5c2](https://github.com/estevanmaito/windmill-react-ui/commit/d60e5c24d75206e753770630dce074cf028146dc))
- **table pagination:** remove layout styles from table footer that were interfering with pagination ([f9e7b9d](https://github.com/estevanmaito/windmill-react-ui/commit/f9e7b9d3b53d415cc0c02f9376856f4c6564716a))

# [0.1.0-alpha.7](https://github.com/estevanmaito/windmill-react-ui/compare/0.1.0-alpha.6...0.1.0-alpha.7) (2020-06-30)

### Bug Fixes

- **windmill:** improve theme handling when user have stored theme ([d71b6df](https://github.com/estevanmaito/windmill-react-ui/commit/d71b6dfcebb2e78d2c72d1956d8d2d0e0bd3786c))

# [0.1.0-alpha.6](https://github.com/estevanmaito/windmill-react-ui/compare/0.1.0-alpha.5...0.1.0-alpha.6) (2020-06-29)

### Features

- **windmill:** add theme storage and user system preferences getter as default ([04c06ef](https://github.com/estevanmaito/windmill-react-ui/commit/04c06ef1888a5675a5f05b784996b6ea9e8c4133))

# [0.1.0-alpha.5](https://github.com/estevanmaito/windmill-react-ui/compare/0.1.0-alpha.4...0.1.0-alpha.5) (2020-06-29)

### Bug Fixes

- **backdrop:** reduce backdrop z-index ([732c546](https://github.com/estevanmaito/windmill-react-ui/commit/732c5462fb1b2a8ae890a0d62347c033ae0b39d0))

### Features

- **windmill:** expose current selected theme and a theme toggler ([73505bf](https://github.com/estevanmaito/windmill-react-ui/commit/73505bf8c9f8c55e68c2b4a7300bae91e4f3217c))

# [0.1.0-alpha.4](https://github.com/estevanmaito/windmill-react-ui/compare/0.1.0-alpha.3...0.1.0-alpha.4) (2020-06-28)

### Bug Fixes

- **dropdown:** export dropdown item ([c177442](https://github.com/estevanmaito/windmill-react-ui/commit/c177442666aa4cb94b4b57c1d668691ed0416c5a))

# [0.1.0-alpha.3](https://github.com/estevanmaito/windmill-react-ui/compare/0.1.0-alpha.2...0.1.0-alpha.3) (2020-06-27)

### Bug Fixes

- **library:** export TableFooter ([04ac997](https://github.com/estevanmaito/windmill-react-ui/commit/04ac9971c083dcd20ac2c9e0922b5d61878abc87))

# [0.1.0-alpha.2](https://github.com/estevanmaito/windmill-react-ui/compare/0.1.0-alpha.1...0.1.0-alpha.2) (2020-06-27)

### Bug Fixes

- **webpack:** fix externals namingfix Module not found: Can't resolve 'reactDOM' ([380843b](https://github.com/estevanmaito/windmill-react-ui/commit/380843b5017a5eeeaf2a51e2b0ba620b2101a04b))

# [0.1.0-alpha.1](https://github.com/estevanmaito/windmill-react-ui/compare/0.1.0-alpha.1...0.1.0-alpha.2) (2020-06-27)

### Bug Fixes

- **proptypes:** fix children proptypes ([43cdf46](https://github.com/estevanmaito/windmill-react-ui/commit/43cdf467c732d3d016fb19823558f97add801b2b))
- **windmill:** export windmill ([9983010](https://github.com/estevanmaito/windmill-react-ui/commit/99830107e66706f583f8552ef1d63a8b09afd337))
- **windmill:** fix dark theme prop ([7155eae](https://github.com/estevanmaito/windmill-react-ui/commit/7155eaea80411e2ad5fb04bd9e35c41c3a8b1cc8))

### Features

- **avatar:** add avatar ([ea7827b](https://github.com/estevanmaito/windmill-react-ui/commit/ea7827b41ec89466f31429f0759b93eb5935c09a))
- **backdrop:** add backdrop ([b367072](https://github.com/estevanmaito/windmill-react-ui/commit/b36707228f918e303e2457fcbc561302e2ec468f))
- **badge:** add badge ([7638177](https://github.com/estevanmaito/windmill-react-ui/commit/76381770e2db0d82dfa27fe657847baacc5a4c91))
- **card:** add card and cardbody ([3c64e85](https://github.com/estevanmaito/windmill-react-ui/commit/3c64e852be893871b346e9d2e2eb9797b0b90b87))
- **dropdown:** add dropdown ([e4eeba9](https://github.com/estevanmaito/windmill-react-ui/commit/e4eeba9715c2af0aa835097440b68171372b9095))
- **helpertext:** add helpertext ([12539d2](https://github.com/estevanmaito/windmill-react-ui/commit/12539d23809a42d77610f507495543e7518ec1ba))
- **input:** add form inputs ([8b4f69e](https://github.com/estevanmaito/windmill-react-ui/commit/8b4f69e1d26350312b0173551968ef88856fc468))
- **label:** add form label ([a74f8a9](https://github.com/estevanmaito/windmill-react-ui/commit/a74f8a978bd347de270bc8e4862febfaf3550b18))
- **modal:** add all modal components ([fc987d5](https://github.com/estevanmaito/windmill-react-ui/commit/fc987d57a0135631af627d332268f6e8b39ac88e))
- **pagination:** add pagination ([a410ca4](https://github.com/estevanmaito/windmill-react-ui/commit/a410ca4d572d5b2b2ed87f03de52ab7aaee554f0))
- **plugin:** add pluginexport a plugin that packs multi-theme, custom-forms and the custom shadow outline plugin, alongwith custom modifications to width, height and colors. ([15c772a](https://github.com/estevanmaito/windmill-react-ui/commit/15c772a1167dd61e94d185255b2f338b70b43672))
- **select:** add select ([da44e48](https://github.com/estevanmaito/windmill-react-ui/commit/da44e4882b5e90c997e6a25908a2697eac253283))
- **table:** add table ([6705f3d](https://github.com/estevanmaito/windmill-react-ui/commit/6705f3d4d9ab5d93833ead9fc9a7a73cbebd2951))
- **table:** add table footer ([19f59a8](https://github.com/estevanmaito/windmill-react-ui/commit/19f59a878d61d45b5ca6e8cd4ea0dfc0bc7e554d))
- **textarea:** add textarea ([6a7a333](https://github.com/estevanmaito/windmill-react-ui/commit/6a7a333db0c39ea58d7ec16bf0b6b47373afc014))
- **theme:** add default theme ([b99470c](https://github.com/estevanmaito/windmill-react-ui/commit/b99470cc690d2ea084cab2703391988c70e45ad7))
- **theme:** add theme context ([d3f13e7](https://github.com/estevanmaito/windmill-react-ui/commit/d3f13e7cc422f062006e3578030b6305e70f678d))
- **themes:** add dark mode and toggle ([371578e](https://github.com/estevanmaito/windmill-react-ui/commit/371578ee1109a8ca78c0fac6c4b8a509f5abdd2c))
- **themes:** expose themes configs ([f388a54](https://github.com/estevanmaito/windmill-react-ui/commit/f388a542ed2645b5edf8613283ab229d287c7ae3))
- **transition:** add transition ([46a7d6b](https://github.com/estevanmaito/windmill-react-ui/commit/46a7d6bee3a26cfe04dc68f51253f429465eb1f1))
