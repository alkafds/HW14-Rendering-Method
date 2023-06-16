## Getting Started

First, install dependencies.

```bash
yarn install
```
then generate prisma and migrate

```bash
yarn prisma generate

yarn prisma migrate
```

then,run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Finally,

Open [http://localhost:3000](http://localhost:3000) in your browser.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


