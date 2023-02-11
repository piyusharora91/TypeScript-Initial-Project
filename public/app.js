import { Invoice } from "./classes/Invoice.js";
import { Payments } from "./classes/Payments.js";
import { ListTemplate } from "./classes/ListTemplate.js";
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
const loadInputs = (e) => {
    e.preventDefault();
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value.toLowerCase() === "invoice") {
        doc = new Invoice(...values);
        list.render(doc, type.value, "start");
    }
    else {
        doc = new Payments(...values);
        list.render(doc, type.value, "end");
    }
    toFrom.value = "";
    details.value = "";
    amount.valueAsNumber = 0;
};
if (localStorage.getItem("finances-logged")) {
}
form.addEventListener("submit", (e) => loadInputs(e));
