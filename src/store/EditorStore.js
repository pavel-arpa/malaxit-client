import { makeAutoObservable } from "mobx"

export default class EditorStore {
    constructor() {
        this._config = {}
        makeAutoObservable(this)
    }

    setConfig(config) {
        this._config = config
    }

    get config() {
        return this._config
    }
}