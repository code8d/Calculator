'use strict';

const result = document.querySelector('input');
const btns = document.querySelectorAll('.btn');

btns.forEach(btn => {
    btn.addEventListener('click', () => {

        if (btn.classList.contains('btn_result')) {
            if (result.value.includes('document')) {
                result.value = 0;
            } else result.value = eval(result.value);
        }   else result.value += btn.innerHTML;

        if (btn.classList.contains('btn_clear')) {
            result.value = '';
        }
    })
});