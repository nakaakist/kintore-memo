import { observable, autorun, action } from "mobx"

export const StrongStore = observable({
    // observable properties:
    data: null,

    // computed property:
    get labelText() {
        return this.showAge ? `${this.name} (age: ${this.age})` : this.name
    },

    setData(data) {
                this.data = data
        }
    },
    {
    setData: action
    }
)