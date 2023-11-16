const userInput = prompt("Enter a list of comma-seperated froyo flavours.",
"vanilla,vanilla,vanilla,strawberry,coffee,coffee");

const array = userInput.split(",");

const froyos = [];
for (let i = 0; i < array.length; i++) {
    const str = array[i];
    froyos.push(str);
}
console.log(froyos);
const froyos_flavours = {
    vanilla: 0,
    strawberry: 0,
    coffee: 0,
}
    for(let i = 0; i < array.length; i++){
        if(array[i] === "vanilla"){
            froyos_flavours.vanilla += 1;
        } else if (array[i] === "strawberry"){
            froyos_flavours.strawberry += 1;
        }else if (array[i] === "coffee"){
            froyos_flavours.coffee += 1;
        }
    }
console.log(froyos_flavours);
console.table(froyos_flavours);