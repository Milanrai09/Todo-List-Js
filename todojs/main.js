const inputsvlaue = document.querySelector('.inputs')
const clickvalue = document.querySelector('.click')
const sectionvalue = document.querySelector('.first')

 clickvalue.addEventListener('click',() => {
   const check = inputsvlaue.value;
   if(!check){
      alert('input is empty');
      return
   }

   const div1 = document.createElement('div');
   div1.className= "first-div";
   sectionvalue.append(div1)
   
   const div2 = document.createElement('div');
   div2.className= "second-div";
   div1.append(div2)

   const makeinputs = document.createElement('input');
   makeinputs.className = "firstinput";
   makeinputs.type = 'text'
   makeinputs.value = inputsvlaue.value
   makeinputs.setAttribute("readonly","readonly")
   div2.append(makeinputs)

   const second = document.createElement('div');
   second.className = "seconddiv"
   div2.append(second)

   const editss = document.createElement('button');
   editss.className = "deleteedit";
   editss.innerText = "edit"
   second.append(editss)

   const deletesss = document.createElement('button');
   deletesss.className = "deleteedit";
   deletesss.innerText = "delete"
   second.append(deletesss)

   inputsvlaue.value = ''

   editss.addEventListener('click', () => {
      if (editss.innerText.toLowerCase() == 'edit'){
        makeinputs.removeAttribute("readonly");
        editss.innerText = "save";
      }else{
        makeinputs.setAttribute("readonly","readonly");
        editss.innerText  = "edit"

      }
   })

   deletesss.addEventListener('click', () => {
      div1.remove()
   })



 })
