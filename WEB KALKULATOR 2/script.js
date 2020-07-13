// tampilan calculator
const calculatorScreen = document.querySelector('.calculator-screen')

// update tampilan
const updateScreen = (number) => {
    calculatorScreen.value = number
}

// inisialisasi angka
const numbers = document.querySelectorAll(".number")

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

let prevNumber =''
let calculationOperator =''
let currentNumber ='0'

const operators = document.querySelectorAll(".operator")


// decimal
const decimal = document.querySelector('.decimal')
inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return
    }

    currentNumber += dot
}


decimal.addEventListener('click', (event) =>{
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})


// penentuan operator
const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber ='0'
}

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})




// penghitungan
const calculate = () => {
    let result =''
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break

        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break

        default:
            return
    }

    currentNumber = result
    calculationOperator = ''
}

// tombol =
const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})

// tombol AC
const clearBtn =document.querySelector('.all-clear')
const clearAll = () => {
    prevNumber = ''
    calculationOperator =''
    currentNumber = '0'
}

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

