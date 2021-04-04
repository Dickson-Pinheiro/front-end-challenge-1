/*
clicar no botão 'negocie pelo whatsapp' do exercício anterior após executar o código
para exibir o escudo do Palmeiras
*/
const headerModal = document.querySelector('header.form-modal__header');
const bodyModal = document.querySelector('div.form-modal__body');
headerModal.innerText = 'Escudo do Palmeiras';
bodyModal.style.display = 'flex';
bodyModal.style.alignItems='center';
bodyModal.style.justifyContent='center';
bodyModal.innerHTML = '<img src="https://img.elo7.com.br/product/zoom/2339DCE/time-de-futebol-matriz-do-palmeira-escudo-brasileiro-matriz.jpg" style="width: 75%"/>';