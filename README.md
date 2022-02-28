# Fleex

## ⚡ How does it work?

This is a monorepo handled via [nx](https://nx.dev/), meaning a few things will be simplified for us.

[Please have a look at the documentation](https://nx.dev/l/r/getting-started/intro).

## ⚡ Getting started

```bash
# using fnm to set node version - https://github.com/Schniz/fnm
fnm use
# installing pnpm - https://pnpm.io/installation
curl -fsSL https://get.pnpm.io/install.sh | sh -
# Installing dependencies
pnpm i
# starting app worker
pnpm start worker
```

## ⚡ CLI

### 🔶 nx CLI

nx comes with [its own CLI](https://nx.dev/l/n/getting-started/nx-cli). Here is a short list of commands that may be
handy:

| Action                                               | Command                                                                         |
|------------------------------------------------------|---------------------------------------------------------------------------------|
| 🆘 Get help!!!                                       | `pnpm nx help`                                                                  |
| 🚀 Run front and server locally                      | `pnpm dev`                                              |
| ▶️ Run an action on one project                      | `pnpm nx run <project>:<action>`                                                |
| ▶️ Run an action on all projects                     | `pnpm nx run-many --target=<action> --all`                                      |
| ▶️ Run an action on a set of projects                | `pnpm nx run-many --target=<action> --projects=<project1>,<project2>`           |
| ▶️ Run an action only on projects containing changes | `pnpm nx affected:<action>`                                                     |
| ✅ Run tests for a project (watch)                    | `pnpm test-changes <project>` or `pnpm nx test --project=<project> --watch`     |
| ✅ Run all tests for a project (watchAll)             | `pnpm test --watchAll` or `pnpm nx test --project=<project> --watchAll`      |
| ✅ Run all tests                                      | `pnpm test` or `pnpm nx run-many --target=test --parallel --all`            |
| 📊 Dependencies graph                                | `pnpm nx dep-graph`                                                             |

### 🔶 Actions

Actions are defined by project in `project.json` files. Here are a few standard actions:

| Action                                           | Description                                                               |
| ------------------------------------------------ | --------------------------------------------------------------------- |
| 🛠️ build  | Builds the app/lib. Use `--prod` flag for a production build |
| 🚀 serve  | Runs the app  |
| ⚠️ lint  | Run the linter against project files  |
| ✅ test  | Runs tests |
| ☑️ e2e  | Runs end to end tests |
| 🎯 sonar  | Runs sonarcloud scan for the app |
| 📘 version | Bumps package version  |
| 🎉 publish | Publishes the package on npm registry |

### 🔶 Useful flags

| flag                 | Description                                                    |
|----------------------|----------------------------------------------------------------|
| ⬛  `--target=x`      | specifies which action to run                                  |
| ⬛  `--skip-nx-cache` | disables nx caching; the command will be ran fully             |
| ⬛  `--verbose`       | prints additional error stack trace on failure                 |
| ⬛  `--projects=x,x`  | `run-many`: specifies which projects to run the action against |
| ⬛  `--parallel=x`    | `run-many`: allows x tasks to be ran in parallel               |

## ⚡ Apps statistics

### 🚀 Frontend

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=jjayet_zoom-calendar-test-front&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=jjayet_zoom-calendar-test-front)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=jjayet_zoom-calendar-test-front&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=jjayet_zoom-calendar-test-front)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=jjayet_zoom-calendar-test-front&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=jjayet_zoom-calendar-test-front)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=jjayet_zoom-calendar-test-front&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=jjayet_zoom-calendar-test-front)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=jjayet_zoom-calendar-test-front&metric=coverage)](https://sonarcloud.io/summary/new_code?id=jjayet_zoom-calendar-test-front)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=jjayet_zoom-calendar-test-front&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=jjayet_zoom-calendar-test-front)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=jjayet_zoom-calendar-test-front&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=jjayet_zoom-calendar-test-front)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=jjayet_zoom-calendar-test-front&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=jjayet_zoom-calendar-test-front)

### 😼 Server

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=jjayet_zoom-calendar-test-server&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=jjayet_zoom-calendar-test-server)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=jjayet_zoom-calendar-test-server&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=jjayet_zoom-calendar-test-server)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=jjayet_zoom-calendar-test-server&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=jjayet_zoom-calendar-test-server)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=jjayet_zoom-calendar-test-server&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=jjayet_zoom-calendar-test-server)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=jjayet_zoom-calendar-test-server&metric=coverage)](https://sonarcloud.io/summary/new_code?id=jjayet_zoom-calendar-test-server)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=jjayet_zoom-calendar-test-server&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=jjayet_zoom-calendar-test-server)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=jjayet_zoom-calendar-test-server&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=jjayet_zoom-calendar-test-server)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=jjayet_zoom-calendar-test-server&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=jjayet_zoom-calendar-test-server)

## ⚡ Tech stack

| Responsibility                                     | Documentation                                                     |
| -------------------------------------------------- | ----------------------------------------------------------------- |
| 🎁 Project tool                                     | [`nx`](https://nx.dev/l/r/getting-started/intro)                  |
| :card_file_box: Package manager                    | [`pnpm`](https://pnpm.io)                                         |
| :toolbox: Language                                 | [`Typescript`](https://www.typescriptlang.org/docs)               |
| :bangbang: Linting                                 | [`ESLint`](https://eslint.org/)                                   |
| :pencil2: Code formatting                          | [`Prettier`](https://prettier.io/)                                |
| ⚛️ Backend framework                                | [`Express`](http://expressjs.com)                                 |
| :satellite: Http requests                          | [`axios`](https://github.com/axios/axios)                         |
| :test_tube: Testing library                        | [`Jest`](https://jestjs.io/docs/en/getting-started.html)          |
| :muscle: CI/CD                                     | [`Github actions`](https://docs.github.com/en/actions/quickstart) |
| :microscope: Codebase analysis                     | [`Sonarcloud`](https://sonarcloud.io)                             |
