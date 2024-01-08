import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="title"
export default class extends Controller {
  static targets = ["header"]

  greet() {
    const element = this.headerTarget
    const name = element.value
    console.log(`hello, ${name}!`)
  }
}
