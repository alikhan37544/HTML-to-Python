document.addEventListener('DOMContentLoaded', () => {
    const result = document.getElementById('result');
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.value === '=') {
                try {
                    result.value = eval(result.value);
                } catch (error) {
                    result.value = 'Error';
                }
            } else if (button.value === 'C') {
                result.value = '';
            } else {
                result.value += button.value;
            }
        });
    });
});
