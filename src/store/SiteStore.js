import { makeAutoObservable } from "mobx"

export default class SiteStore {
    constructor() {
        this._siteTypes = []
        this._paymentMethods = []
        makeAutoObservable(this)
    }

    setSiteTypes(siteTypes) {
        this._siteTypes = siteTypes
    }

    get siteTypes() {
        return this._siteTypes
    }

    setPaymentMethods(paymentMethods) {
        this._paymentMethods = paymentMethods
    }

    get paymentMethods() {
        return this._paymentMethods
    }
}