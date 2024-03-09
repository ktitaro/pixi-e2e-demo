import 'normalize.css'
import { HomePage } from './scenes'
import { Application } from 'pixi.js'

// Configures the game app
const app = new Application()
await app.init({ resizeTo: window })
document.body.appendChild(app.canvas)
window.__APP__ = app
export { app }

// Renders the initial scene
app.stage.addChild(new HomePage())
app.renderer.render(app.stage)


// window.__TEST__ = () => {
//     const playButton = app.stage.getChildByName('PlayButton', true)!
//     const { x: clientX, y: clientY } = playButton.getGlobalPosition()
//     console.log({ clientX, clientY })
//     app.canvas.dispatchEvent(new MouseEvent('click', { clientX, clientY }))
//     app.canvas.dispatchEvent(new MouseEvent('click', { clientX, clientY }))
//     app.canvas.dispatchEvent(new MouseEvent('click', { clientX, clientY }))
//     app.canvas.dispatchEvent(new MouseEvent('click', { clientX, clientY }))

//     // let clickEvent = new MouseEvent('click', {
//     //     bubbles: true,
//     //     cancelable: true,
//     //     clientX: yourXPosition,
//     //     clientY: yourYPosition
//     // });

//     // // Dispatch the event on the canvas
//     // app.view.dispatchEvent(clickEvent);
//     // playButton?.dispatchEvent()
// }
// window.__ADD_DIV__ = (x: number, y: number) => document.body.insertAdjacentHTML('beforeend', `<div style="position: absolute; top: ${y}px; left: ${x}px; width: 5px; height: 5px; background-color: red; border-radius: 50%;"></div>`)
