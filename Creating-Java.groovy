document.getElementById('project-name').addEventListener('input', function() {
    const projectNameInput = document.getElementById('project-name'); 
    const createBtn = document.getElementById('create-btn'); 
    
    if (projectNameInput.value.trim() !== "") {
        createBtn.classList.add('enabled'); 
        createBtn.setAttribute('href', "customize.html?project=" + encodeURIComponent(projectNameInput.value)); // 設置鏈接
        createBtn.style.cursor = 'pointer';
    } else {
        createBtn.classList.remove('enabled'); 
        createBtn.removeAttribute('href'); 
        createBtn.style.cursor = 'not-allowed'; 
    }
});
