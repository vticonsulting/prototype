# @designcode/prototype

Prototyping Sandbox & Toolkit (Vue 2)

- <https://prototype.designcoder.net>

## Features

- Backend / Server / API Agnostic
- Vanilla HTML, CSS, JS examples
- Catalog of useful UI Base Elements, Patterns, Layouts, Templates
- Headless Vue Component Examples
- Full Calendar Example
- CKEditor Example
- Kendo UI Grid Example (LICENSE Required)
- Kendo Data Query
- Kendo Drawing
- Kendo Vue Animation
- Kendo Vue Data Tools
- Kendo Vue Dateinputs
- Kendo Vue Dialogs
- Kendo Vue Dropdowns
- Kendo Vue Inputs
- Kendo Vue Intl
- Mock data / APIs with JSON-Server, MirageJS or MSW
- Testing Library (Cypress, Jest)
- Typescript (Optional)
- More...

## Contributing / Developing

### Scripts

```sh
npm run serve
npm run build
npm run lint
```

### Documentation

<https://docs.designcoder.net>

/prototype/client/docs/README.md

```sh
npm run docs:dev # Dev server - http://localhost:3000 (Default)
npm run docs:build # Production deployable build
```

### Component Explorer

<http://storybook.designcoder.net>

```sh
npm run storybook
npm run build-storybook
```

### Design System

<http://buds.designcoder.net>

## Installed Packages

- Axios
- Chart JS
- Canvas Confetti
- Animate CSS
- Faker
- Filepond (Validate Size, Validate Type, Image Edit, EXIF Orientation, Image Preview)
- Date Fns
- D3
- GSAP
- Pikaday
- Dropzone
- Mapbox GL (Vue)
- Vue Composition API
- Vue Drag Scroll
- Vue i18n
- Vue Router
- Vue Toastification
- Vue Draggable
- Vue Use (Core, Sound, Integrations)
- VueJS Smart Table
- Vue Good Table
- Vuelidate (Core, Validators)
- Vee Validate (Validations)
- Vuex
- Vue Slick Carousel
- Full Calendar Daygrid
- Full Calendar Interaction
- Full Calendar Timegrid
- Maki Icons
- Font Awesome Icons

### Dev Local / toolkit

- Vue Test Utils
- Testing Library (Cypress, DOM, Jest DOM, User Event, Vue)
- Jest (Unit, Snapshot and AXE testing)
- Cypress (e2e Testing)
- Storybook
- Sentry

### Design Utilities

| Package             | Version |
| ------------------- | ------- |
| ap-style-title-case |         |
| aspect-ratio        |         |
| forms               | 0.3.3   |
| line-clamp          | 0.2.1   |
| typography          | 0.4.1   |

# Vue in Vite application

Used as a starter for experimenting with Vite.

## Features and Components

- Vue 3
- Grid - The Kendo Native Data Grid (Table) for Vue provides covering everything from paging, sorting, filtering, editing, and grouping to row and column virtualization, export to PDF and Excel and accessibility.
- DropDowns - AutoComplete, ComboBox, DropDownList and MultiSelect components in action.
- DateInputs - Calendar, DateInput, DatePicker, DateTimePicker, TimePicker
- Inputs - Input, NumericTextBox, MarkedTextBox, Slider
- Dialogs - Dialog and Window

## Project setup and usage

Install dependencies:

```
yarn
```

```
npm install
```

Run development server:

```
yarn dev
```

```
npm run dev
```

### Committing Changes

We use [standard-version](https://github.com/conventional-changelog/standard-version) to automatically update the changelog and decide new version numbers. As such, we need commit messages to follow a consistent format (drawn from [conventional commits](https://conventionalcommits.org/)).

Example commit messages (simply match this pattern and your commit message will be accepted):

- `git commit -m "feat: add seeds-example packet"`
- `git commit -m "fix(seeds-color): fix table layout for green colors" -m "fixes RD-999"`
- `git commit -m "feat(seeds-border): add new 8px border radius token"`
- `git commit -m "docs: update asset file paths"`
- `git commit -m "feat(dependencies): upgrade classnames to 2.2.5"`
- `git commit -m "chore(dependencies): upgrade babel dependencies to latest version"` (chore because they are devDependencies)
- `git commit -m "feat(build): add linting to commit messages"`

Commit message format:

```
type(scope?): subject

body?

footer?
```

`type` is one of the following:

- **fix**: Solves a bug
- **feat**: Adds a new feature
- **build**: Affects the build system or external dependencies
- **docs**: Adds or alters documentation
- **perf**: Improves performance
- **test**: Adds or modifies tests
- **chore**: Other changes that don't modify `src` or `test` files

`scope` is optional but, with few exceptions, should be used for all `feat` and `fix` commits. Common scopes include:

- **[seeds-{Packet Name}]**: Changes to a Seeds packet
- **dependencies**: Changes to `dependencies` should be `feat`, and `devDependencies` should be `chore`
- **build**: Changes to the build that make significant changes to the published package, should be a `feat` or `fix`

Feel free to suggest additional scope options.

`subject` requirements:

- starts with lower case
- uses the imperative, present tense: "change" not "changed" nor "changes"
- includes motivation for the change and contrasts with previous behavior

`body` is optional and allows for more details to be added

`footer` contains meta-information about pull requests, e.g. "fixes DS-999", referring to a Jira ticket.

### Publishing Package Updates to npm

- Create a pull request against the `develop` branch
- Get approval
- Merge PR then create a new PR to the `main` branch and merge it. Jenkins will notify a successful build notifying that the seeds-packets were published to NPM, once that is complete create a final pull request from `main` to `develop`


***

# Exemplar Next

## Components (Elements, Patterns, Layouts, and Templates)

- [ ] [Alert](#alert)
- [ ] [Button](#button)
- [ ] [Chart](#chart)
- [ ] [Dashboard](#dashboard)
- [ ] [FileUpload](#fileupload)
- [ ] [Gallery](#gallery)
- [ ] [Grid](#grid)
- [ ] [IconOutlined](#iconoutlined)
- [ ] [IconSolid](#iconsolid)
- [ ] [List](#list)
- [ ] [ListItem](#listitem)
- [ ] [Modal](#modal)
- [ ] [MultiSelect](#multiselect)
- [ ] [Navbar](#navbar)
- [ ] [Select](#select)
- [ ] [SlideOver](#slideover)
- [ ] [Table](#table)
- [ ] [TableRow](#tablerow)
- [ ] [Toast](#toast)
- [ ] [UsaMap](#usamap)

## Notable Features

- [Composition API](https://v3.vuejs.org/guide/composition-api-introduction.html)
- [Teleport](https://v3.vuejs.org/guide/teleport.html) for Portals
- [Fragments](https://v3.vuejs.org/guide/migration/fragments.html)
- [Emits Component Option](https://v3.vuejs.org/guide/component-custom-events.html)
- [createRenderer API from `@vue/runtime-core` to create custom renderers](https://github.com/vuejs/vue-next/tree/master/packages/runtime-core)
- [SFC Composition API Syntax Sugar ( `<script setup>` )](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md)
- [SFC State-driven CSS Variables ( v-bind in <style> )](https://github.com/vuejs/rfcs/blob/style-vars-2/active-rfcs/0000-sfc-style-variables.md)
- [SFC <style scoped> can now include global rules or rules that target only slotted content](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0023-scoped-styles-changes.md)
- [Suspense](https://v3.vuejs.org/guide/migration/suspense.html)
- Multiple v-models
- Better reactivity
- Pinia / Vuex 5

##

- [Vue CLI]((https://cli.vuejs.org/)) / Webpack
- [Vue Composition Utilities](https://vueuse.org/functions.html) for Vue 2 and 3
- [TypeScript](https://www.typescriptlang.org/)
- [Storybook](https://storybook.js.org/) (Component Explorer)
- [Testing Library](https://testing-library.com/docs/vue-testing-library/examples)

## Domain Information

- [ ] [Territory] (Region)
- [ ] [Project]
- [ ] [ProjectStatus]
- [ ] [Customer] (Carrier)
- [ ] [Billing]
- [ ] [BillingStatus]
- [ ] [BusinessUnit]
- [ ] [Claim]
- [ ] [Message]
- [ ] [ServiceArea]
- [ ] [ServiceType]
- [ ] [User]
- [ ] [UserType]
- [ ] [Vendor]

## Example Pages

- [ ] Customers
- [ ] Dashboard
- [ ] Help
- [ ] Messages
- [ ] Movies
- [ ] Plants
- [ ] Podcasts
- [ ] Projects
- [ ] Settings
- [ ] Team
- [ ] Territories
- [ ] UserProfile
- [ ] UserProfile
- [ ] Users
- [ ] Welcome



## Project setup

```bash
$ pnpm install

# Compiles and hot-reloads for development
$ pnpm run serve

# Compiles and minifies for production
$ pnpm run build

# Run your unit tests
$ pnpm run test:unit

# Lints and fixes files
$ pnpm run lint
```

## Helpful Links

- [Understanding Async/Await](https://css-tricks.com/understanding-async-await)
- [Methods, Computed, and Watchers in Vue.js](https://css-tricks.com/methods-computed-and-watchers-in-vue-js)

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
