import { Application } from 'pixi.js'

declare global {
    interface Window {
        __APP__: Application
    }
}
