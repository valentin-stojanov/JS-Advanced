function lockedProfile() {

    document.querySelector('#main').addEventListener('click', toggle);

    function toggle(e) {
        const btn = e.target;
        const profile = btn.parentElement;
        const radioBtnUnlock = profile.querySelector('input[type="radio"][value="unlock"]');

        if (radioBtnUnlock.checked === true) {
            const hiddenDiv = Array
                .from(profile.querySelectorAll('div'))
                .find(d => d.id.includes('HiddenFields'));

            if (btn.tagName === 'BUTTON') {
                if (btn.textContent === 'Show more') {
                    hiddenDiv.style.display = 'block';
                    btn.textContent = 'Hide it';
                } else if (btn.textContent === 'Hide it') {
                    btn.textContent = 'Show more';
                    hiddenDiv.style.display = '';
                }
            }
        }
    }
}