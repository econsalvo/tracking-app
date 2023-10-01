# Tracking-API

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Setting up local development environment

- Navigate inside the bringer-test folder
- Install dependecies
- Inside the bringer folder create and configure `env.local` file with the following variables:

```bash
JWT_SECRET = "your secret"
BRINGER_TKN = "bringer_bearer_token"
```

```bash
npm install
```


- Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## For Live Preivew

Open [https://tracking-app-umber.vercel.app/tracking_view](https://tracking-app-umber.vercel.app/tracking_view).

## About this project

Simple app that allows navigation between two pages. The first page is a login page that allows the user to login with a username and password. The second page is a tracking page that allows the user to enter a tracking number and see the status of the package.

- Utilizes Nextjs app routing. 
- Ant design components
- JWT token creation
- Deployed on vercel

