document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {});
  
  
  
    const addUserButton = document.getElementById('add-user-button')
    addUserButton.addEventListener('click' , ()=>{
      document.querySelector('.add-user-modal').classList.add('show')
      document.querySelector('.add-user-modal-back').classList.remove('dis-none')
    })
  
    document.querySelector('.add-user-modal-back').addEventListener('click', ()=>{
      document.querySelector('.add-user-modal').classList.remove('show')
      document.querySelector('.add-user-modal-back').classList.add('dis-none')
})

setTimeout(function(){
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => {
      console.log("end...");
      console.log(json);
    



      let html = ""

for (const user of json){
  html = html +`<tr>


<td>${user.id}</td>
<td>${user.name}</td>
<td>${user.username}</td>
<td>${user.email}</td>
<td>${user.address.city}</td>
<td>
  <i class="material-icons m-l-5 m-r-5 red-text">delete_forever</i>
  <i class="material-icons m-l-5 m-r-5 orange-text">edit</i>
</td>
</tr>`

}

document.querySelector('.desktap_table_body').innerHTML = html
});

},5000)


  });


  