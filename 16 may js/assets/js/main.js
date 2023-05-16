
const row = document.querySelector(".row");

axios.get('https://jsonplaceholder.typicode.com/posts').then(resp => {

console.log(resp.data)
    for (let i = 0; i < resp.data.length; i++) {
        
       row.innerHTML +=  `<div class="card m-3" style="width: 18rem;">
          <h5 class="card-title">${resp.data[i].title}</h5>${resp.data[i].body}</p>
          <p class="card-text">

        </div>
      </div>`
       
    }







    

    
});