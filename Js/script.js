let rec=document.getElementById('rec')
function getRecipe(){

    fetch('https://dummyjson.com/recipes').then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log('Data',data);  

        let  str=" ";
        data.recipes.forEach(element => {
            str+=`<div class="col-4 px-2 "><li  claas=" card list-unstyled">
            <div> <img src="${element.image}" alt="img" class="img-fluid"/></div>
            <li class="mt-2 mb-2"><b>${element.name}</b></li>
          
            <button class="mb-2 btn" onclick="getMore(${element.id})">view More</button>

            </li></div> `
        });
        rec.innerHTML+=str;  
    }).catch((err)=>{
        console.log('Error',err);
    })
}

getRecipe();

let view=document.querySelector('#view');

function getMore(id) 
{
    fetch(`https://dummyjson.com/recipes/${id}`).then
    (response => response.json()).then
    (data => 
    {
        let str = "";
            
        str +=` <div class="modal fade show" tabindex="-1" style="display:block; background-color: rgba(0,0,0,0.2) !important;">
          <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">${data.name}</h5>
                <button type="button" class="btn-close" onclick="closeModal()"></button>
              </div>
              <div class="modal-body">
              <b>Instructions</b> :  </br>${data.instructions} </br>
              <b>Ingredient</b> : </br>${data.ingredients} </br>
              <b> prepTimeMinutes</b> : </br> ${data.prepTimeMinutes} </br>
              <b>cuisine</b> : </br> ${data.cuisine} </br>
              <b>Difficulty</b> : </br> ${data.difficulty} </br>
              <b>Meal Type</b> : </br> ${data.mealType} </br>
              <b>Rating</b> : </br> ${data.rating} </br>
              <b>ReviewCount</b> : </br> ${data.reviewCount} 

              </div>
              <div class="modal-footer d-flex justify-content-between">
                <button type="button" class="btn btn-primary" onclick="closeModal()">Close</button>R
              </div>
            </div>
          </div>
        </div>
        `;
        view.innerHTML += str;
    }).catch
    (error => console.log('Error:', error));
}
function closeModal() {
    view.innerHTML = "";
}