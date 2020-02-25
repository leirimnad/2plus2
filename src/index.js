let input1 = document.createElement('input')
let input2 = document.createElement('input')
let button = document.createElement('button')
	button.textContent = 'Рассчитать'

let errorDiv1 = document.createElement('div')
	errorDiv1.classList.add('error-message')
	errorDiv1.textContent = "Это не число"

let errorDiv2 = document.createElement('div')
	errorDiv2.classList.add('error-message')
	errorDiv2.textContent = "Это не число"

input1.style.display = input2.style.display = button.style.display = 'block';

input1 = document.body.appendChild(input1)
input2 = document.body.appendChild(input2)
button = document.body.appendChild(button)

let res = document.createElement('div')
res.id = 'result'

button.addEventListener('click', function(e) {
	
	// 1.
		if(!isDec(input1.value)){
			document.body.insertBefore(errorDiv1, input2)
		} else { errorDiv1.remove() }
	// 2.
		if(!isDec(input2.value)){
			document.body.insertBefore(errorDiv2, button)
		} else { errorDiv2.remove() }
	// 3.
		if(isDec(input1.value) && isDec(input2.value)){
			res.textContent = +input1.value + +input2.value
			if(res.parentNode != document.body) document.body.appendChild(res)
		}

})


function isDec(num) {
	if(isFinite(num) && /^\d*\.?\d*$/.test(num.toString())) return true;
	return false;
}