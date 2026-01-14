````md
# Simple Next.js Setup Guide

---

## Install Node.js

First install **Node.js (LTS version)**  
Check if installed:

```bash
node -v
npm -v
````

---

## Create a Next.js App

Run this command in your terminal:

```bash
npx create-next-app@latest my-app
```

Then go to your project:

```bash
cd my-app
```

Start the dev server:

```bash
npm run dev
```

Open `http://localhost:3000`

---

## Project Structure (important folders)

| Folder        | Use                              |
| ------------- | -------------------------------- |
| `app/`        | Main routing system (App Router) |
| `pages/`      | Old routing system (if used)     |
| `public/`     | Images, fonts                    |
| `components/` | Reusable UI components           |
| `styles/`     | CSS files                        |

---

## Routing in Next.js

Create a page:

```
app/about/page.jsx
```

Now visit `/about`

---

## Navigation

```jsx
import Link from "next/link";

<Link href="/about">About</Link>
```

---

## Client vs Server Components

Default = **Server Component**
If you use hooks (`useState`, `useEffect`, `usePathname`) add on top:

```js
"use client";
```

---

## Styling

You can use:

* CSS
* Tailwind CSS
* SCSS

Tailwind setup:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

---

## Build for Production

```bash
npm run build
npm start
```

---

## Short Summary

* Install Node.js
* Run `npx create-next-app`
* Use `app/` for routing
* Use `Link` for navigation
* Add `"use client"` when using hooks
* Style with CSS or Tailwind
* Build with `npm run build`