const loadTools=()=>{
    const url=`https://openapi.programming-hero.com/api/ai/tools`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayTools(data.data.tools));
    
}
const displayTools=tools=>{
console.log(tools)
modalDisplay(tools);
  if(tools.length>6){
    tools= tools.slice(0,6);
    document.getElementById('see_more').classList.remove('d-none');
  }
    const ToolsContainer= document.getElementById('tools_container');
    tools.forEach(tool=>{
  
       const ToolDiv= document.createElement('div');
        ToolDiv.classList.add('col');
        ToolDiv.innerHTML=`
        <div class="card h-100">
          <img src="${tool.image}" class="card-img-top" alt="...">
          <div class="card-body ">
            <h5 class="text-2xl font-semibold card-title ">Features</h5>
            <ul>
            <li>1. Natural Language Processing</li>
            <li>2. Natural Language Processing</li>
            <li>3. Natural Language Processing</li>
            </ul> 
            <br>
            <hr class="py-2" >
            <h1 class="text-xl font-semibold">${tool.name}</h1>
            <input type='date' id='date'><span>${tool.published_in}<span>
            <button onclick='loadDetails("${tool.id}")' href="#" ><i class="fa fa-arrow-right px-15rem"  data-bs-toggle="modal" data-bs-target="#toolDetailModal"  ></i></button>
           
          </div>
        
         
        </div>
      
        `;
        ToolsContainer.appendChild(ToolDiv);

})

}


const loadallTools=()=>{
  const url=`https://openapi.programming-hero.com/api/ai/tools`;
  fetch(url)
  .then(res=>res.json())
  .then(data=>displayallTools(data.data.tools));
  
}
const displayallTools=tools=>{
    console.log(tools)
    const ToolsContainer= document.getElementById('tools_container');
    tools.forEach(tool=>{
        // console.log(tool.id)
       const ToolDiv= document.createElement('div');
        ToolDiv.classList.add('col');
        ToolDiv.innerHTML=`
        <div class="card h-100">
          <img src="${tool.image}" class="card-img-top" alt="...">
          <div class="card-body ">
            <h5 class="text-2xl font-semibold card-title ">Features</h5>
            <ul>
            <li>1. Natural Language Processing</li>
            <li>2. Natural Language Processing</li>
            <li>3. Natural Language Processing</li>
            </ul> 
            <br>
            <hr class="py-2" >
            <h1 class="text-xl font-semibold">${tool.name}</h1>
            <input type='date' id='date'><span>${tool.published_in}<span>
            <button onclick='loadDetails("${tool.id}")' href="#" ><i class="fa fa-arrow-right px-15rem"  data-bs-toggle="modal" data-bs-target="#toolDetailModal"  ></i></button>
           
          </div>
        
         
        </div>
      
        `;
        ToolsContainer.appendChild(ToolDiv);
       
})
toggleSpinner(false);
}
document.getElementById('see_more').addEventListener('click',function(){
  // start loader
  toggleSpinner(true);
 // ToolDiv.classList.remove('col');
  loadallTools();
  document.getElementById('see_more').classList.add('d-none');

  
})


const toggleSpinner= isLoading=>{
  const loaderSection= document.getElementById('loader');
  if(isLoading){
    loaderSection.classList.remove('d-none');
  }
  else{
    loaderSection.classList.add('d-none');
  }
}

const loadDetails=id=>{
  // console.log(id);
  
  const url=`https://openapi.programming-hero.com/api/ai/tool/${id}`;
  fetch(url)
  .then(res=>res.json())
  .then(data=>displayTooldetails(data.data))

}
const displayTooldetails=Tool=>{
console.log(Tool);

const modalTitle = document.getElementById('modal_title');
modalTitle.innerText=Tool.description;

const pricing=document.getElementById('pricing');
const cost= Tool.pricing;
console.log(cost);
const price=cost.map(item=>{
  return `${item.plan} ${item.price}`;
})
pricing.innerText= price;

// 

for(let i=1;i<=3;i++){
  const features=Tool.features[i].feature_name;
  console.log(features);

const future= document.getElementById('features');
future.innerText=`${features}`;
}

for(let i=0;i<=2;i++){
  const integration=Tool.integrations[i];
  console.log(integration);

const integrate= document.getElementById('integration');
integrate.innerText=integration;
}

}

// const modalDisplay =Tool=>{

// for(const tool of Tool){
//   const value=tool;
//   displayValue(value);
//   // console.log(tool.image);
  
// }
// }
// const displayValue=value=>{
//   console.log(value.image);
//   console.log(value.name);
//   document.getElementById('toolsdetails').innerHTML=`<img width='450px' src="${value.image}">
//   <h1>"${value.name}"</h1>
//   `

// }

const ToolsdetailsContainer=document.getElementById('toolsdetails');
const modalDisplay= Tools=>{
  // console.log(Tools);
  Tools.forEach(tool=>{
  console.log(tool.image)
    const ToolDiv= document.createElement('div');
     ToolDiv.classList.add('tools');
     ToolDiv.innerHTML=`
     <div class="card h-100">
       <img src="${tool.image}" class="card-img-top" alt="...">
       
       </div>
   
     `;
     ToolsdetailsContainer.appendChild(ToolDiv);

})
}

loadTools();

