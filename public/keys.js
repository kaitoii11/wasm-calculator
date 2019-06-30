const calculator = document.getElementsByClassName('calculator')[0]
const keys = calculator.getElementsByClassName('calculator_keys')[0]
const display = calculator.getElementsByClassName('calculator_display')[0]

keys.addEventListener('click', e => {
    const key = e.target
    const action = key.dataset.action

    if(!action) {
        console.log('number')
    } else if (
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide'
    ) {
        console.log('operator')
    } else if ( action === 'decimal') {
        console.log('decimal')
    } else if ( action === 'clear') {
        console.log('clear')
    } else if ( action === 'calculate') {
        console.log('calculate')
    }


})
