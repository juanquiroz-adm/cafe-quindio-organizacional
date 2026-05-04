lucide.createIcons();

const modal = document.getElementById('doc-modal');
const content = document.getElementById('main-content');
const modalBody = document.getElementById('modal-body');
const modalTitle = document.getElementById('modal-title');

function openDoc(url, type) {
    modal.classList.remove('hidden');
    content.classList.add('blur-content');

    // LIMPIEZA DE TÍTULO NIVEL 5.0 (Regex)
    let cleanTitle = url.split('/').pop();
    cleanTitle = cleanTitle.replace(/\.pdf|\.xlsx|\.docx/g, ''); // Quita extensiones
    cleanTitle = cleanTitle.replace(/[_-]/g, ' '); // Cambia guiones por espacios
    modalTitle.innerText = cleanTitle.toUpperCase();

    if (type === 'pdf') {
        modalBody.innerHTML = `<iframe src="${url}" class="w-full h-full border-none"></iframe>`;
    } else if (type === 'external') {
        modalBody.innerHTML = `<iframe src="${url}" class="w-full h-full border-none"></iframe>`;
    } else if (type === 'download') {
        modalBody.innerHTML = `
            <div class="w-full h-full flex flex-col items-center justify-center text-center p-10">
                <i data-lucide="file-spreadsheet" class="w-20 h-20 text-[#c5a059] mb-6"></i>
                <h2 class="text-2xl font-bold text-white mb-4">Archivo de Datos (Excel)</h2>
                <p class="text-neutral-500 mb-8 max-w-md">Este formato no permite previsualización directa en navegador. Por favor, descargue el archivo para su revisión completa.</p>
                <a href="${url}" download class="bg-[#c5a059] text-black px-8 py-3 rounded-lg font-bold hover:bg-white transition-all">DESCARGAR ARCHIVO</a>
            </div>
        `;
        lucide.createIcons();
    }
}

function closeDoc() {
    modal.classList.add('hidden');
    content.classList.remove('blur-content');
    modalBody.innerHTML = '';
}

// Cerrar con tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDoc();
});