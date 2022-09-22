var answerOption = document.querySelectorAll('.mcq__answers li');

array.forEach(element => {
	element.addEventListener('click', function () {
		this.classList.add('teste');
	});
});
