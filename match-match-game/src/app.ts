import { Field } from "./components/field/field";

export class App {
  private readonly field: Field;

  constructor(private readonly rootElement: HTMLElement) {
    this.field = new Field();
    this.rootElement.appendChild(this.field.element);
  }
}
