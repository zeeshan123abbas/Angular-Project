# 🅰️ Angular SSR Routing App

![Angular](https://img.shields.io/badge/Angular%2018-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

An **Angular 18** application built with standalone components, the Angular Router, and **server-side rendering (SSR)** through an Express server.

## ✨ Features

- 🧭 Client-side **routing** with `app.routes.ts`
- 🧩 **Standalone components**, no NgModules
- ⚡ **Server-side rendering** (`server.ts`, `app.config.server.ts`) for faster first load and better SEO
- 🧪 Unit tests with Karma and Jasmine

## 🗂️ Project structure

```
src/app/
├── app.component.*       Root component and layout
├── app.routes.ts         Route definitions
├── app.config.ts         Browser providers
├── app.config.server.ts  Server providers
└── my-route/             Example routed component
server.ts                 Express server for SSR
```

## ▶️ Getting started

```bash
git clone https://github.com/zeeshan123abbas/Angular-Project.git
cd Angular-Project
npm install
ng serve        # http://localhost:4200
```

| Command | What it does |
|---|---|
| `ng serve` | Dev server with live reload |
| `ng build` | Production build into `dist/` |
| `ng test` | Run unit tests |

## 🎓 What you will learn

How Angular routing works, how to structure an app with standalone components, and how SSR renders pages on the server.

---

👨‍🏫 **Zeeshan Abbas**, Senior Faculty & Manager Academics, Aptech North Nazimabad
