const linkCollection = document.querySelectorAll('a.header-mobile__whatsapp-link');
const modal = document.querySelector('div.header-conversion-form-whatsapp-modal');
modal.remove()
const link0 = linkCollection[0];
const data = JSON.parse(link0.getAttribute('data-phones'))
for(let l=0; l<linkCollection.length; l++){
    if(l < data.length){
        linkCollection[l].addEventListener('click', ()=>{
            window.open(`${data[l].link}`);
        }) 
    } else {
        let position = l - data.length;
        linkCollection[l].addEventListener('click', ()=>{
             window.open(`${data[position].link}`);
        }) 
    }
}