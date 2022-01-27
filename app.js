const devs_form = document.getElementById('devs_form');
const devs_data = document.getElementById('devs_data');



devs_form.addEventListener('submit', function(e){

    e.preventDefault();


    let name = this.querySelector('input[name="name"]');
    let gender = this.querySelector('input[name="gender"]:checked');
    let skill = this.querySelectorAll('input[name="skill"]:checked');
    let photo = this.querySelector('input[name="photo"]');


    let skills_arr = [];

    for (let i = 0; i < skill.length; i++) {
        skills_arr.push(skill[i].value);
        
    }

    let data_arr;

    if(dataGet('Devs')){
        data_arr = dataGet('Devs')
    }else{
        data_arr = [];
    }

    data_arr.push({
        name   : name.value,
        gender : gender.value,
        skill  : skills_arr,
        photo  : photo.value
    });


    dataSend('Devs', data_arr)


    all_devs();

});

all_devs();
function all_devs(){

    let develoers ;
    if(dataGet('Devs')){
        develoers = dataGet('Devs');
    }else{
        develoers = [];
    }

    let data = '';

    develoers.map(d => {

        let lists = '';

        d.skill.map(list => {

            lists += '<li class="list-group-item"> '+ list +' </li>';

        });

        data += ` 
        <div class="col-md-4">
               <div class="card">
                   <img style="width:100%; height:255px; object-fit: cover; " class="card-image" src="${d.photo}" alt="">
       
                   <div class="card-body">
                       <h2>${d.name}</h2>
                       <p>Gender : ${d.gender} </p>
                       <hr>
       
                       Skills
                       <hr>
       
                       <ul class="list-group">
       
                          ${lists}
       
                       </ul>
       
                   </div>
               </div>
           </div> `;



    });
    
    devs_data.innerHTML = data;


}