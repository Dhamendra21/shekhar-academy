
let data = [
    {
        'topic':"E-commerce",
        'author':'Dr. Janardhan',
        'define':'"the electronic communication between various element including consumers,suppliers,business partners,government and financial institution”'
    },
    {
        'topic':"E-business",
        'author':'Dr. philip kotler ',
        'define':'“electronic business is general term for buying and selling process that is supported by electronic means”.'
    },
    {
        'topic':"business",
        'author':'s',
        'define':'"according to kotler armstrong “a service is an activity or benefit that one party can offer to other, that is initially intangible And does not result in the ownership of anything”'
    }
]


// let filter = data.filter((data)=>{
// return data.topic == "business"

// })
// console.log(filter)
function search(){
  
    let output = data.filter((data)=>{
    let userInput = document.getElementById('userInput')
      return data.topic == userInput
     
    })
  
  
    let heading = document.getElementById('heading')
    heading.innerHTML =" "
    console.log(output)
   renderdata()
  } 
  function renderdata(){
  

    data.map((data)=>{
      let defination = document.getElementById('defination')
      let author = document.getElementById('author')
  
      
      defination.innerText= 'Definition :' + ' '+ data.define
      author.innerText=  data.author
    })
  
  }