function leapYear(year) {
    let leap = ((year % 4 == 0 && year % 100 != 0)
        || year % 400 == 0) ? console.log('yes') : console.log('no')

}

leapYear(2020)