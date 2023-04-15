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
        // console.log(text.target.innerHTML);
        // console.log(nums)
        let ascii = text.target.value.charCodeAt();
        if (text.target.innerHTML == 'C') {
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
            inputs.innerHTML = nums;
            nums = 0;
        }
        else if (text.target.value == '-ve') {
            nums = nums * (-1);
            inputs.innerText = nums;
        }
        else if (inputs.innerHTML == 0 || nums == 0) {
            nums = text.target.innerHTML;
            inputs.innerHTML = nums;
        }
        else {            
            nums += text.target.value;
            inputs.innerText = nums;
        }
    });
});

close.addEventListener('click', () => {
    if (confirm("Do you want to exit?") == true) {
        calc.style.display = 'none';
    }
});

min.addEventListener('click', () => {
    document.querySelector('.display').style.display = 'none';
    document.querySelector('.btn').style.display = 'none';
})

max.addEventListener('click', () => {
    if (document.querySelector('.btn').style.display == 'none') {
        document.querySelector('.btn').style.display = 'block';
        document.querySelector('.display').style.display = 'flex';
    }
});