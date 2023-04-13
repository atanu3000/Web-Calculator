let nums = ""
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
        if (text.target.innerHTML == 'C') {
            nums = 0;
            inputs.innerHTML = nums;
        }
        else if(text.target.innerHTML == 'del'){
            nums = nums.slice(0, -1);
            inputs.innerHTML = nums;
            if (nums.length == 0){
                inputs.innerHTML = 0;
            }
        }
        else if(inputs.innerHTML == 0 || nums == 0) {
            nums = text.target.innerHTML;
            inputs.innerHTML = nums;
        }
        else if(text.target.innerHTML == '='){
            nums = eval(nums);
            inputs.innerHTML = nums;
            nums = 0;
        }
        else {
            nums += text.target.value;
            inputs.innerText = nums;
            
        }

        
    })
});

close.addEventListener('click', () => {
    calc.style.dispaly = 'none';
    alert("Do you want to exit?");
});

min.addEventListener('click', () => {
    document.querySelector('.display').style.dispaly = 'none';
})