function create(words) {
   const contentDiv = document.querySelector('#content');

   for (const word of words) {
      const div = document.createElement('div');
      const p = document.createElement('p');
      p.textContent = word;
      p.style.display = 'none';
      div.appendChild(p);
      contentDiv.appendChild(div);
   }

   contentDiv.addEventListener('click', onClick);

   function onClick(e){
      e.target.firstChild.style.display = 'block';
   }
}