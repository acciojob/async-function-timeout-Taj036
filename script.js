
document.getElementById('btn').addEventListener('click', async (event) => {
event.preventDefault(); 

  let text = document.getElementById("text").value;
  let delay = document.getElementById("delay").value;
  if(text && delay){
   
    await new Promise((resolve) =>{
      setTimeout(()=>{
        resolve(text);
      },delay)
    })
    document.getElementById('output').innerText = text;
  }
  
});