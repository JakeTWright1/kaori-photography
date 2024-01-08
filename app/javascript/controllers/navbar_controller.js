import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="navbar"
export default class extends Controller {

  handleScroll(_event) {
    static targets = ["name"]

    if (-100 > clientHeight) {
        this.nameTarget.classList.add('reveal')
    } else {
        this.nameTarget.classList.remove('reveal')
    }
}

connect() {
    window.addEventListener("scroll", this.handleScroll)
}

disconnect() {
    window.removeEventListener("scroll", this.handleScroll);
}
}

}
