const countries = ["UK", "France", "Germany"];
console.log("Initial countries: ", countries)

countries.push("Spain")
console.log("After first push: ", countries)

countries.push("Italy", "Netherlands")
console.log("After second push: ", countries)
//push 
countries.pop()
console.log("After first pop: ", countries)

countries.pop()
console.log("After second pop: ", countries)

countries.unshift("India")
console.log("After first unshift: ", countries)

countries.unshift("China")
console.log("After second unshift: ", countries)

countries.shift()
console.log("After first shift: ", countries)

countries.shift()
console.log("After second shift: ", countries)