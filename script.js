const scores = document.querySelectorAll('.score')
const submitBtn = document.querySelector('#submit')
const chosenPoints = document.querySelector('.rating-summary-frame')
const surveyPage = document.querySelector('.survey-page')
const thanksPage = document.querySelector('.thanks-page')
const ratingFrame = document.querySelector('.rating-buttons')

let rating = 0

const submitScore = () => {
	const submitted = document.querySelectorAll('.active')
	if (submitted.length === 0) {
		ratingFrame.style.border = '.5px solid var(--orange)'
		return
	}

	surveyPage.classList.add('hide')
	thanksPage.classList.remove('hide')
	chosenPoints.textContent = `You selected out ${rating} of 5`
}
const chosePoints = e => {
	scores.forEach(score => {
		score.classList.remove('active')
	})
	ratingFrame.style.border = 'none'
	e.target.classList.add('active')

	rating = e.target.dataset.points
	console.log(rating)
}

submitBtn.addEventListener('click', submitScore)
scores.forEach(score => {
	score.addEventListener('click', e => {
		chosePoints(e)
	})
})
