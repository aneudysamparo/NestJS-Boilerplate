# NestJS v7 Boilerplate

[![Awesome NestJS](https://img.shields.io/badge/Awesome-NestJS-blue.svg?longCache=true&style=flat-square)](https://github.com/juliandavidmr/awesome-nestjs)

> This is an ever-evolving, very opinionated architecture and dev environment for new node projects using [NestJS](https://nestjs.com). Based on [Awesome NestJS](https://github.com/juliandavidmr/awesome-nestjs) 😄

## Getting started

```bash
# 1. Clone the repository or click on "Use this template" button.
git clone https://github.com/AneudysAmparo/nest-boilerplate.git myproject

# 2. Enter your newly-cloned folder.
cd myproject

# 3. Install dependencies. (Make sure node is installed: https://nodejs.org/en/download/)
npm install

# 4. Run development server and open http://localhost:3000
npm run start

# 5. Read the documentation linked below for "Setup and development".

# 6. Generate new private/public keys (optional)
ssh-keygen -t rsa -b 4096 -m PEM -f jwtRS256.key
# Don't add passphrase

openssl rsa -in jwtRS256.key -pubout -outform PEM -out jwtRS256.key.pub

# Use the output on console
cat jwtRS256.key
cat jwtRS256.key.pub

```

## Features

<dl>
  <dt><b>Quick scaffolding</b></dt>
  <dd>Create modules, services, controller - right from the CLI!</dd>

  <dt><b>Instant feedback</b></dt>
  <dd>Enjoy the best DX (Developer eXperience) and code your app at the speed of thought! Your saved changes are reflected instantaneously.</dd>

  <dt><b>JWT Authentication with RSA Algorithm</b></dt>
  <dd>Installed and configured JWT authentication for more protection</dd>

  <dt><b>Next generation Typescript</b></dt>
  <dd>Always up to date typescript version.</dd>

  <dt><b>Industry-standard routing</b></dt>
  <dd>It's natural to want to add pages (e.g. /about`) to your application, and routing makes this possible.</dd>

  <dt><b>Environment Configuration</b></dt>
  <dd>development, staging and production environment configurations</dd>

  <dt><b>Swagger Api Documentation</b></dt>
  <dd>Already integrated API documentation. To see all available endpoints visit http://localhost:3000/documentation</dd>

  <dt><b>Linter</b></dt>  
  <dd>tslint + eslint + prettier = ❤️</dd>
</dl>

## Documentation

Coming soon...


