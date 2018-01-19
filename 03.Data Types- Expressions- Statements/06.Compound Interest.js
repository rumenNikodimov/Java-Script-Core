function solution(input){
    let principalSum = input[0]
    let interestRate = input[1]
    let compoundingPeriod = input[2]
    let compoundingFrequency = 12 / compoundingPeriod
    let totalTimespan = input[3]

    let F = principalSum * Math.pow((1 + interestRate/compoundingFrequency), interestRate*compoundingFrequency)
    console.log(F)
}

solution([1500, 4.3, 3, 6])