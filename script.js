const form = document.querySelector("#form-habits");
const nlwSetup = new NLWSetup(form);
const button = document.querySelector("header button");

button.addEventListener("click", add);
form.addEventListener("change", save);

function add() {
    const today = new Date().toLocaleDateString("pt-bt").slice(0, -5);
    const dayExists = nlwSetup.dayExists(today);
    if(dayExists) {
        alert("Dia já incluso 🔴");
        return;
    }

    alert("Adicionado com sucesso ✅")
    nlwSetup.addDay(today);
}

// .stringify serve para transformar um obj em string
function save() {
    localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data));
}

// parse serve para transformar string em obj
const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {};
nlwSetup.setData(data);
nlwSetup.load();