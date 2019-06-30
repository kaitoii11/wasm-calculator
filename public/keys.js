const calculator = document.getElementsByClassName('calculator')[0]
const keys = calculator.getElementsByClassName('calculator_keys')[0]
const display = calculator.getElementsByClassName('calculator_display')[0]

const calculate = (val1, operator, val2) => {
    let result = ''

    if (operator === 'add'){
        result = _add(val1, val2)
    } else if (operator === 'subtract'){
        result = _subtract(val1, val2)
    } else if (operator === 'multiply'){
        result = _multiply(val1, val2)
    } else {
        result = _divide(val1, val2)
    }

    return result
}


keys.addEventListener('click', e => {
    const key = e.target
    const action = key.dataset.action
    const content = key.textContent
    const disp = display.textContent

    // number key
    if(!action) {
        if(disp === '0' || calculator.dataset.previouskey === 'operator'){
            display.textContent = content
        } else {
            display.textContent = disp + content
        }
        previouskey = content
    } else if (
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide'
    ) {
        //show pressed operator
        key.classList.add('is-depressed')
        calculator.dataset.previouskey = 'operator'
        calculator.dataset.val1 = disp
        calculator.dataset.operator = action
    } else if ( action === 'decimal') {
    } else if ( action === 'clear') {
        display.textContent = '0'
        calculator.dataset.previouskey = action

    } else if ( action === 'calculate') {
        const val1 = calculator.dataset.val1
        const operator = calculator.dataset.operator
        const val2 = disp

        display.textContent = calculate(val1, operator, val2)
    }
})
