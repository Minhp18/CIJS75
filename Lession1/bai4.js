const nameInput = document.getElementById("name-input")
const phonenumberInput = document.getElementById("phonenumber-input")
const searchInput = document.getElementById("search-input")
const nameList = document.getElementsByClassName("full-name")
const pnList = document.getElementsByClassName("phone-number")

let arr = []

for (let i=0; i<nameList.length; i++){
    let n=nameList[i].innerHTML
    let pn=pnList[i].innerHTML
    let obj={
        fullname: n,    
        phonenumber: pn
    }
    arr.push(obj)
}
document.querySelector('#add-btn').addEventListener('click', function(){
    addContact(nameInput.value, phonenumberInput.value)
    nameInput.value=''
    phonenumberInput.value=''
})
function addContact(fullName, phonenumber){
    if(!fullName || !fullName.trim() || !phonenumber || !phonenumber.trim()) return
    const contactDiv = document.createElement('div')
    
    contactDiv.className = 'contact-entry'
    const fullNameDiv = document.createElement('div')
    fullNameDiv.className = 'full-name'
    fullNameDiv.textContent = fullName
    const phonenumberDiv = document.createElement('div')
    phonenumberDiv.className = 'phone-number'
    phonenumberDiv.textContent = phonenumber
    contactDiv.append(fullNameDiv)
    contactDiv.append(phonenumberDiv)
    document.querySelector('#contacts-list').append(contactDiv)
}
function DeleteDuplicate(){
    for (let i=0; i<pnList.length; i++){
        for (let j=i+1; j<pnList.length; j++){
            if(pnList[i].textContent==pnList[j].textContent){
                const contactEntry = document.getElementsByClassName("contact-entry")
                contactEntry[j].remove()
            }
        }
    }
}
function Search(){
    const contactEntry = document.getElementsByClassName("contact-entry")
    for (let i=0; i<contactEntry.length; i++){
        if((searchInput.value).trim()==""){
            return
        }
        if (!((searchInput.value).trim()==nameList[i].textContent) || !((searchInput.value).trim()==pnList[i].textContent)){
            contactEntry[i].style.visibility = "hidden" 
        }
    }

}
