# How Cool Things Work

## Contents

- [Reference](#reference)
- [Getting Started](#getting-started)
- [Build & Deployment](#build-deployment)

## Running the deck

Install dependencies:
```bash
yarn
```
or 
```bash
npm install
```

Then, to start up the local server, run
```bash
yarn start
```
or
```bash
npm start
```

Open a browser and hit [http://localhost:3000](http://localhost:3000) to see the deck.

## Build & Deployment

Building the dist version of the project is as easy as running
```bash
npm run build
```

## TODO

### AST Explorer

- [x] fix tree settings toggle in AST Explorer
- [x] copy node key on click
- [ ] zen mode shortcut to hide some things
- [ ] create a slider for font scaling
- [ ] adjust tree line height to fit when scaled
- [ ] adjust tree margins to fit horizontally when scaled
- [ ] change default zoom
- [ ] show debug of scale size in %
- [ ] deploy AST Explorer fork

### Slides

- [ ] compilers diagram
- [ ] full-screen the AST Explorer slide
- [ ] fix production deploy

### Resources

- [ ] setup website
- [ ] link out to linting resources
- [ ] link out to codemod resources
- [ ] link out to other material