# [0.1.0-alpha.9](https://github.com/estevanmaito/windmill-react-ui/compare/0.1.0-alpha.8...0.1.0-alpha.9) (2020-07-06)


### Bug Fixes

* **avatar:** add inline-block to avatar ([c1d4dc1](https://github.com/estevanmaito/windmill-react-ui/commit/c1d4dc115e6e9aa2a74c376f769eb50e284da524))
* **backdrop:** increase backdrop z-index ([951c489](https://github.com/estevanmaito/windmill-react-ui/commit/951c48946d663d1b9071b3d2073bcfcb8a06882a))
* **button:** fix link style for dark buttons ([1002423](https://github.com/estevanmaito/windmill-react-ui/commit/1002423618d29ef8cab320b629c762f3d2b7d408)), closes [#4](https://github.com/estevanmaito/windmill-react-ui/issues/4)
* **dark mode:** fix window not being available on SSR ([af2d464](https://github.com/estevanmaito/windmill-react-ui/commit/af2d46409ed719a7103f50d8915440082fd02787))


### Code Refactoring

* **avatar:** use src instead of img ([e988424](https://github.com/estevanmaito/windmill-react-ui/commit/e98842497c588b5bd33b4feedd5ad6beb8d9f771))


### BREAKING CHANGES

* **avatar:** Avatar now uses src instead of img to pass the image src
* **avatar:** add inline-block
* **button:** different colors for dark mode
* **backdrop:** z-index increased from 10 to 50

# [0.1.0-alpha.8](https://github.com/estevanmaito/windmill-react-ui/compare/0.1.0-alpha.7...0.1.0-alpha.8) (2020-06-30)


### Bug Fixes

* **defaulttheme:** export defaultTheme as Common JS and remove deprecated theme toggler ([d60e5c2](https://github.com/estevanmaito/windmill-react-ui/commit/d60e5c24d75206e753770630dce074cf028146dc))
* **table pagination:** remove layout styles from table footer that were interfering with pagination ([f9e7b9d](https://github.com/estevanmaito/windmill-react-ui/commit/f9e7b9d3b53d415cc0c02f9376856f4c6564716a))

# [0.1.0-alpha.7](https://github.com/estevanmaito/windmill-react-ui/compare/0.1.0-alpha.6...0.1.0-alpha.7) (2020-06-30)


### Bug Fixes

* **windmill:** improve theme handling when user have stored theme ([d71b6df](https://github.com/estevanmaito/windmill-react-ui/commit/d71b6dfcebb2e78d2c72d1956d8d2d0e0bd3786c))

# [0.1.0-alpha.6](https://github.com/estevanmaito/windmill-react-ui/compare/0.1.0-alpha.5...0.1.0-alpha.6) (2020-06-29)


### Features

* **windmill:** add theme storage and user system preferences getter as default ([04c06ef](https://github.com/estevanmaito/windmill-react-ui/commit/04c06ef1888a5675a5f05b784996b6ea9e8c4133))

# [0.1.0-alpha.5](https://github.com/estevanmaito/windmill-react-ui/compare/0.1.0-alpha.4...0.1.0-alpha.5) (2020-06-29)


### Bug Fixes

* **backdrop:** reduce backdrop z-index ([732c546](https://github.com/estevanmaito/windmill-react-ui/commit/732c5462fb1b2a8ae890a0d62347c033ae0b39d0))


### Features

* **windmill:** expose current selected theme and a theme toggler ([73505bf](https://github.com/estevanmaito/windmill-react-ui/commit/73505bf8c9f8c55e68c2b4a7300bae91e4f3217c))

# [0.1.0-alpha.4](https://github.com/estevanmaito/windmill-react-ui/compare/0.1.0-alpha.3...0.1.0-alpha.4) (2020-06-28)


### Bug Fixes

* **dropdown:** export dropdown item ([c177442](https://github.com/estevanmaito/windmill-react-ui/commit/c177442666aa4cb94b4b57c1d668691ed0416c5a))

# [0.1.0-alpha.3](https://github.com/estevanmaito/windmill-react-ui/compare/0.1.0-alpha.2...0.1.0-alpha.3) (2020-06-27)


### Bug Fixes

* **library:** export TableFooter ([04ac997](https://github.com/estevanmaito/windmill-react-ui/commit/04ac9971c083dcd20ac2c9e0922b5d61878abc87))

# [0.1.0-alpha.2](https://github.com/estevanmaito/windmill-react-ui/compare/0.1.0-alpha.1...0.1.0-alpha.2) (2020-06-27)


### Bug Fixes

* **webpack:** fix externals namingfix Module not found: Can't resolve 'reactDOM' ([380843b](https://github.com/estevanmaito/windmill-react-ui/commit/380843b5017a5eeeaf2a51e2b0ba620b2101a04b))



# [0.1.0-alpha.1](https://github.com/estevanmaito/windmill-react-ui/compare/0.1.0-alpha.1...0.1.0-alpha.2) (2020-06-27)


### Bug Fixes

* **proptypes:** fix children proptypes ([43cdf46](https://github.com/estevanmaito/windmill-react-ui/commit/43cdf467c732d3d016fb19823558f97add801b2b))
* **windmill:** export windmill ([9983010](https://github.com/estevanmaito/windmill-react-ui/commit/99830107e66706f583f8552ef1d63a8b09afd337))
* **windmill:** fix dark theme prop ([7155eae](https://github.com/estevanmaito/windmill-react-ui/commit/7155eaea80411e2ad5fb04bd9e35c41c3a8b1cc8))


### Features

* **avatar:** add avatar ([ea7827b](https://github.com/estevanmaito/windmill-react-ui/commit/ea7827b41ec89466f31429f0759b93eb5935c09a))
* **backdrop:** add backdrop ([b367072](https://github.com/estevanmaito/windmill-react-ui/commit/b36707228f918e303e2457fcbc561302e2ec468f))
* **badge:** add badge ([7638177](https://github.com/estevanmaito/windmill-react-ui/commit/76381770e2db0d82dfa27fe657847baacc5a4c91))
* **card:** add card and cardbody ([3c64e85](https://github.com/estevanmaito/windmill-react-ui/commit/3c64e852be893871b346e9d2e2eb9797b0b90b87))
* **dropdown:** add dropdown ([e4eeba9](https://github.com/estevanmaito/windmill-react-ui/commit/e4eeba9715c2af0aa835097440b68171372b9095))
* **helpertext:** add helpertext ([12539d2](https://github.com/estevanmaito/windmill-react-ui/commit/12539d23809a42d77610f507495543e7518ec1ba))
* **input:** add form inputs ([8b4f69e](https://github.com/estevanmaito/windmill-react-ui/commit/8b4f69e1d26350312b0173551968ef88856fc468))
* **label:** add form label ([a74f8a9](https://github.com/estevanmaito/windmill-react-ui/commit/a74f8a978bd347de270bc8e4862febfaf3550b18))
* **modal:** add all modal components ([fc987d5](https://github.com/estevanmaito/windmill-react-ui/commit/fc987d57a0135631af627d332268f6e8b39ac88e))
* **pagination:** add pagination ([a410ca4](https://github.com/estevanmaito/windmill-react-ui/commit/a410ca4d572d5b2b2ed87f03de52ab7aaee554f0))
* **plugin:** add pluginexport a plugin that packs multi-theme, custom-forms and the custom shadow outline plugin, alongwith custom modifications to width, height and colors. ([15c772a](https://github.com/estevanmaito/windmill-react-ui/commit/15c772a1167dd61e94d185255b2f338b70b43672))
* **select:** add select ([da44e48](https://github.com/estevanmaito/windmill-react-ui/commit/da44e4882b5e90c997e6a25908a2697eac253283))
* **table:** add table ([6705f3d](https://github.com/estevanmaito/windmill-react-ui/commit/6705f3d4d9ab5d93833ead9fc9a7a73cbebd2951))
* **table:** add table footer ([19f59a8](https://github.com/estevanmaito/windmill-react-ui/commit/19f59a878d61d45b5ca6e8cd4ea0dfc0bc7e554d))
* **textarea:** add textarea ([6a7a333](https://github.com/estevanmaito/windmill-react-ui/commit/6a7a333db0c39ea58d7ec16bf0b6b47373afc014))
* **theme:** add default theme ([b99470c](https://github.com/estevanmaito/windmill-react-ui/commit/b99470cc690d2ea084cab2703391988c70e45ad7))
* **theme:** add theme context ([d3f13e7](https://github.com/estevanmaito/windmill-react-ui/commit/d3f13e7cc422f062006e3578030b6305e70f678d))
* **themes:** add dark mode and toggle ([371578e](https://github.com/estevanmaito/windmill-react-ui/commit/371578ee1109a8ca78c0fac6c4b8a509f5abdd2c))
* **themes:** expose themes configs ([f388a54](https://github.com/estevanmaito/windmill-react-ui/commit/f388a542ed2645b5edf8613283ab229d287c7ae3))
* **transition:** add transition ([46a7d6b](https://github.com/estevanmaito/windmill-react-ui/commit/46a7d6bee3a26cfe04dc68f51253f429465eb1f1))

