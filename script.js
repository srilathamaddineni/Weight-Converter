let kgref=document.getElementById("kg");
let lbref=document.getElementById("lb");
let ozref=document.getElementById("oz");

let convertFromKg=() =>{
    let kg=kgref.value;
    lbref.value=(kg*2.205).toFixed(2);
    ozref.value=(kg*35.274).toFixed(2);
};
let convertFromLb=() =>{
    let lb=lbref.value;
    kgref.value=(lb/2.205).toFixed(2);
    ozref.value=(lb*16).toFixed(2);

}
let convertFromOz=() => {
    let oz=ozref.value;
    kgref=(oz/35.274).toFixed(2);
    lbref=(oz/16).toFixed(2);
}
kgref.addEventListener("input",convertFromKg);
lbref.addEventListener("input",convertFromLb);
ozref.addEventListener("input",convertFromOz);
