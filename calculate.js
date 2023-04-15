let nums = "0"
let buttons = document.querySelectorAll('button');
let inputs = document.querySelector('#inputs');
let min = document.querySelector('#min');
let max = document.querySelector('#max');
let close = document.querySelector('#close');
let calc = document.querySelector('.wrapper');
let equal = document.querySelector('#equal');

buttons.forEach((btn) => {
    btn.addEventListener('click', (text) => {
        let ascii = text.target.value.charCodeAt();
        if (text.target.innerHTML == '%') {
            inputs.innerHTML = `(${nums})%`;
            nums = (nums / 100);
        }
        else if (text.target.innerHTML == 'x!') {
            inputs.innerHTML = `${nums}!`;
            res = 1
            for (let i = 2; i <= nums; i++) {
                res *= i
            }
            nums = res;
        }
        else if (text.target.innerHTML == 'C') {
            nums = 0;
            inputs.innerHTML = nums;
        }
        else if (text.target.id == 'invert') {
            if (nums == '0') {
                inputs.innerHTML = 'Undefined';
            } else {
                inputs.innerText = `1/(${nums})`;
                nums = `1 / ${nums}`;
            }
        }
        else if (text.target.id == 'sqr') {
            inputs.innerText = `sqr(${nums})`;
            nums = `${nums} * ${nums}`;
        }
        else if (text.target.id == 'sqrt') {
            inputs.innerText = `√(${nums})`;
            nums = Math.sqrt(nums);
        }
        else if (text.target.innerHTML == 'del') {
            nums = nums.slice(0, -1);
            inputs.innerHTML = nums;
            if (nums.length == 0) {
                inputs.innerHTML = 0;
            }
        }
        else if (text.target.innerHTML == '=') {
            nums = eval(nums);
            inputs.innerHTML = (nums);
        }
        else if (text.target.value == '-ve') {
            nums = nums * (-1);
            inputs.innerText = nums;
        }
        else {
            if (typeof (nums) == 'number' && ascii >= 48 && ascii <= 57) {
                nums = '0'
            }
            if (inputs.innerHTML == 0 || nums == 0) {
                nums = text.target.innerHTML;
                inputs.innerHTML = nums;
            } else {
                nums += text.target.value;
                inputs.innerText = nums;
            }
        }
    });
});

// To close the calculator on click
close.addEventListener('click', () => {
    if (confirm("Do you want to exit?") == true) {
        calc.style.display = 'none';
    }
});

// To minimize the calculator on click
min.addEventListener('click', () => {
    document.querySelector('.display').style.display = 'none';
    document.querySelector('.btn').style.display = 'none';
})

// To maximize the calculator on click
max.addEventListener('click', () => {
    if (document.querySelector('.btn').style.display == 'none') {
        document.querySelector('.btn').style.display = 'block';
        document.querySelector('.display').style.display = 'flex';
    }
});