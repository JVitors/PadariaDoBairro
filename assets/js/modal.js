// Add JS here                
function openModal(id) {
  document.getElementById(id).style.display = 'block';
}
function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}
// Fecha o modal ao clicar fora do conteúdo
window.onclick = function (event) {
  var openModals = document.querySelectorAll('.modal[style*="display: block"]');
  openModals.forEach(function (modal) {
    if (event.target === modal) {
      closeModal(modal.id);
    }
  });
}

