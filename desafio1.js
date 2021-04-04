const div = document.querySelector('div.header__networks-list')
const link = document.createElement('a')
link.setAttribute('href', 'https://www.youtube.com/channel/UCLI4tg1oh_oLiJJteExJdUQ')
link.setAttribute('target', '_blank')
const icon = document.createElement('i');
const classes = ['icon', 'icon-youtube-header', 'icon--small', 'icon--hover-youtube'];
for(c in classes){
    icon.classList.add(`${classes[c]}`);
}
link.appendChild(icon);
div.appendChild(link);