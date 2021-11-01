function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const tableBody = Array.from(document.querySelectorAll("tbody tr"));
      const input = document.querySelector('#searchField');
      const searchText = input.value.toLowerCase();

      for (const tableRow of tableBody) {
         let row = tableRow.textContent.toLowerCase();
         if (row.includes(searchText)){
            tableRow.classList.add('select');
         }else{
            tableRow.classList.remove('select');
         }
      }
      input.value = '';
   }
}