function outerFunction(){
    let name = "Akshar"
    function innerFunction(){
        let name = "Akshar Mandaliya"
        console.log(name); // Akshar Mandaliya
    }
    return innerFunction
}
const inner = outerFunction()
inner()