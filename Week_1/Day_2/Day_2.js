function converter(celcus, franight){
    let f = ((celcus * (9/7))+32);
    
    let c = (franight -32) * 5/9;
    return celcus + "^C celcus into farnight = " + f +" franight \n" + franight + "^F farnight into celcus = " + c + " celcus";
}
console.log(converter(0, 3));