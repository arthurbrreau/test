(function(){
 const cta = document.getElementById('cta');
 if (cta) {
 cta.addEventListener('click', () => {
 console.log('[cta] Contact clicked');
 alert('Merci ! Nous vous répondrons rapidement.');
 }); }
})();
