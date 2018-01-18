function area(w, h, W, H){
    let firstArea = w * h
    let secondArea = W * H
    let doubleArea = Math.min(w, W) * Math.min(h, H)
    let result = firstArea + secondArea - doubleArea
    console.log(result)
}

area(2, 4, 5, 3)