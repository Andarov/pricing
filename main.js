const elBasic = document.querySelector(".number-basic");
const elProf = document.querySelector(".number-prof");
const elMaster = document.querySelector(".number-master");

const elAnnually = document.querySelector(".label-annually");
const elMonthly = document.querySelector(".label-monthly");

const elAnnuallyLabel = document.querySelector(".control-annually");
const elMonthlyLabel = document.querySelector(".control-monthly");


elMonthly.addEventListener("click", function() {
    elBasic.textContent = "19.99"
    elProf.textContent = "24.99"
    elMaster.textContent = "39.99"
})

elAnnually.addEventListener("click", function() {
    elBasic.textContent = "199.99"
    elProf.textContent = "249.99"
    elMaster.textContent = "399.99"
})

elMonthlyLabel.addEventListener("click", function() {
    elBasic.textContent = "19.99"
    elProf.textContent = "24.99"
    elMaster.textContent = "39.99"
})

elAnnuallyLabel.addEventListener("click", function() {
    elBasic.textContent = "199.99"
    elProf.textContent = "249.99"
    elMaster.textContent = "399.99"
})

