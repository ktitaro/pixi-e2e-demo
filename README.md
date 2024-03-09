# Pixi.js e2e-tests demo

This project is my attempt to explore the implementation of the e2e tests for Pixi.js apps. Surprisingly, the process isn't overly complicated, but there are some key considerations. Pixi.js does almost all the heavy lifting out of the box: constructing the scenes graph allowing us to access each individual widget rendered on the canvas, as well as providing a set methods for querying the specific widgets we need. To conduct e2e tests, two things are required: exposing the scene graph to the `window` and giving the widgets proper names or ids. In summary, e2e tests are feasible and can offer us an improved way to evaluate the quality of our games.

## How to run all of this

```sh
$ npm install // install project dependencies
$ npm run dev -w game-app // runs the actuall game
$ npm run test:ui -w game-e2e // runs e2e web interface
```

After running the commands mentioned above, you will be provided with a web interface where you can run your e2e tests separately and see the results including: console logs, screenshots and whether your tests have passed or not.
