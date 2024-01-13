import {Index} from "./index";

export class App {
    constructor(model) {
        this.model = model
    }

    init() {
        const site = new Site('#site') // dom model

        site.render(this.model) // html -> dom-tree

        const updateCallBack = newBlock => {
            this.model.push(newBlock)
            site.render(this.model)
        }

        const index = new Index('course-form', updateCallBack)

    }
}