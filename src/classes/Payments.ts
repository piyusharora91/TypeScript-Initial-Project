import { HasFormatter } from "../interfaces/HasFormatter.js";

//classes
export class Payments implements HasFormatter {
  // readonly recipient: string;
  // details: string;
  // private amount: number;

  // constructor(c: string, d: string, a: number) {
  //   this.recipient = c;
  //   this.details = d;
  //   this.amount = a;
  // }
  constructor(
    readonly recipient: string,
    public details: string,
    private amount: number
  ) {}

  format() {
    return `${this.recipient} is owed ${this.amount} for ${this.details}`;
  }
}
