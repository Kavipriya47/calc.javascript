document.addEventListener('DOMContentLoaded', function () {
    const display = document.forms['calc']['display'];

    function appendToDisplay(value) {
        display.value += value;
    }

    function clearDisplay() {
        display.value = '';
    }

    function backspace() {
        display.value = display.value.slice(0, -1);
    }

    function calculate() {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = 'Error';
        }
    }
    
    const buttons = document.querySelectorAll('input[type="button"]');
    buttons.forEach((button) => {
        button.addEventListener('click', function () {
            const buttonValue = this.value;

            switch (buttonValue) {
                case 'C':
                    clearDisplay();
                    break;
                case '<-':
                    backspace();
                    break;
                case '=':
                    calculate();
                    break;
                default:
                    appendToDisplay(buttonValue);
                    break;
            }
        });
    });
});
