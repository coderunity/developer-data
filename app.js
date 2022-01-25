const devs_form = document.getElementById('devs_form');
const devs_data = document.getElementById('devs_data');



devs_form.addEventListener('submit', function(e){

    e.preventDefault();


    let name = this.querySelector('input[name="name"]');
    let gender = this.querySelector('input[name="gender"]:checked');
    let skill = this.querySelector('input[name="skill"]:checked');
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
        Name   : name.value,
        Gender : gender.value,
        Skill  : skills_arr,
        Photo  : photo.value
    });


    dataSend('Devs', data_arr)


    all_devs();

});

all_devs();
function all_devs(){

    let develoers = dataGet('Devs');

    let data = '';

    develoers.map(devs => {

        let lists = '';

        devs.skill.map(list => {

            lists += '<li class="list-group-item"> '+ list +' </li>';

        });

        data += ` 
        <div class="col-md-4">
               <div class="card">
                   <img style="width:100%; height:255px; object-fit: cover; " class="card-image" src="${devs.photo}" alt="">
       
                   <div class="card-body">
                       <h2>${devs.name}</h2>
                       <p>Gender : ${devs.gender} </p>
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