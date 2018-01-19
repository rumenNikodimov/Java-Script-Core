function gradToDegrees(grad){
    grad = grad % 400
    let degrees = grad * 0.9
    return degrees < 0 ? 360 + degrees : degrees
    console.log(degrees)
}
let output = GradToDegrees('-50')
console.log(output)

function compoundInterest(){

}

compoundInterest