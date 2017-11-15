const experience = JSON.parse(localStorage.getItem("resumeDatabase"))
const storedResume = document.getElementsByClassName("info")[0]

for (let key in experience) {
	const resumeKey = experience[key]

	for (let i = 0; i < resumeKey.length; i++) {
		let career = resumeKey[i]
		storedResume.innerHTML += `
        <article class="${key}">
            <h4>${career.title}</h4>
                <p>${career.company}</p>
                <p>${career.location}</p>
                <p>${career.years}</p>
                <ul>${career.responsibilities}</ul>
        </article>
        `
	}
}