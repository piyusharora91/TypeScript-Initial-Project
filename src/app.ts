import { Invoice } from "./classes/Invoice.js";
import { Payments } from "./classes/Payments.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

// const form= document.querySelector('form')!;
const form = document.querySelector(".new-item-form") as HTMLFormElement;

//inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

//list Template Instance
const ul = document.querySelector("ul") as HTMLUListElement;
const list = new ListTemplate(ul);

const loadInputs = (e: Event) => {
  e.preventDefault();

  let values: [string, string, number];
  values = [toFrom.value, details.value, amount.valueAsNumber];

  let doc: HasFormatter;
  if (type.value.toLowerCase() === "invoice") {
    doc = new Invoice(...values);
    list.render(doc, type.value, "start");
  } else {
    doc = new Payments(...values);
    list.render(doc, type.value, "end");
  }

  toFrom.value = "";
  details.value = "";
  amount.valueAsNumber = 0;
};

// On Load
if (localStorage.getItem("finances-logged")) {
}

form.addEventListener("submit", (e: Event) => loadInputs(e));
