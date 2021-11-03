function loadRepos() {
	const username = document.getElementById('username').value;
	const url = `https://api.github.com/users/${username}/repos`;
	const list = document.getElementById('repos');

	fetch(url)
		.then(res => {
			if (res.ok == false) {
				throw new Error(`${res.status} ${res.statusText}`);
			}
			return res.json();
		})
		.then(handleresponse)
		.catch(handleError);

	function handleresponse(data) {
		
		list.innerHTML = '';

		for (let repo of data) {
			const liElement = document.createElement('li');
			const anchor = document.createElement('a');
			anchor.href = `${repo.html_url}`;
			anchor.textContent = `${repo.full_name}`;

			liElement.appendChild(anchor);
			list.appendChild(liElement);
		}
	}

	function handleError(error) {
		console.log(error);
		list.innerHTML = '';
		const liElement = document.createElement('li');
		liElement.textContent = `Error: ${error.message}`;
		list.appendChild(liElement);
	}
}