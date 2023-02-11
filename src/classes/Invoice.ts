import { HasFormatter } from "../interfaces/HasFormatter.js";

//classes
export class Invoice implements HasFormatter {
  // readonly client: string;
  // details: string;
  // private amount: number;

  // constructor(c: string, d: string, a: number) {
  //   this.client = c;
  //   this.details = d;
  //   this.amount = a;
  // }
  constructor(
    readonly client: string,
    public details: string,
    private amount: number
  ) {}

  format() {
    return `${this.client} owes ${this.amount} for ${this.details}`;
  }
}
