const header = document.getElementById('main-header');
const projectModal = document.getElementById('projectModal');
const modalBodyContent = document.getElementById('modal-body-content');

window.addEventListener('scroll', () => {
    header.classList.toggle('header-scrolled', window.scrollY > 50);
});

const dataSources = {
    projects: {
        hotel: [
            'imagenes/Proyecto_hotel/home.PNG',
            'imagenes/Proyecto_hotel/Reservar Habitacion.PNG',
            'imagenes/Proyecto_hotel/paypal.PNG',
            'imagenes/Proyecto_hotel/reservas.PNG',
            'imagenes/Proyecto_hotel/estadisticas.PNG',
            'imagenes/Proyecto_hotel/tipo habitaciones.PNG',
            'imagenes/Proyecto_hotel/Gestion habitaciones.PNG',
            'imagenes/Proyecto_hotel/Gestion cupon.PNG',
            'imagenes/Proyecto_hotel/Asignar cupon.PNG',
            'imagenes/Proyecto_hotel/Cupon email.PNG'
        ],
        analysis: [
            'imagenes/videojuegos/1.PNG',
            'imagenes/videojuegos/2.PNG',
            'imagenes/videojuegos/3.PNG',
        ],
        netflix: [
            'imagenes/Netflix/1.PNG',
            'imagenes/Netflix/2.PNG',
            'imagenes/Netflix/3.PNG',
            'imagenes/Netflix/4.PNG',
            'imagenes/Netflix/5.PNG'
        ]
    },
    certifications: {
        azure: 'imagenes/certificados/excel.pdf',
        gemini: 'imagenes/certificados/Gemini.PNG',
        excel: 'imagenes/certificados/excel.pdf',
        python_basico: 'imagenes/certificados/Python_Essentials_1_certificate_manuel-26-sco-gmail-com_77bfd705-65c4-4ea6-a1e9-f090da728dd6.pdf',
        python_II: 'imagenes/certificados/Python_Essentials_2_certificate_manuel-26-sco-gmail-com_e241c263-f15f-43ef-869d-b272dd8e0c95.pdf'
    }
};

projectModal.addEventListener('show.bs.modal', event => {
    const button = event.relatedTarget;
    const projectType = button.getAttribute('data-project-type');
    const projectId = button.getAttribute('data-project-id');
    modalBodyContent.innerHTML = '';

    if (projectType === 'certification') {
        const pdfUrl = dataSources.certifications[projectId];
        if (pdfUrl) {
            modalBodyContent.innerHTML = `
                <iframe 
                    src="${pdfUrl}#toolbar=0&navpanes=0" 
                    class="w-100 h-100 border-0"
                    oncontextmenu="return false"
                ></iframe>
            `;
        }
    } else if (projectType === 'project') {
        const images = dataSources.projects[projectId];
        if (images) {
            const carouselHtml = `
                        <div id="project-carousel" class="carousel slide w-100" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                ${images.map((src, index) => `
                                    <div class="carousel-item ${index === 0 ? 'active' : ''}">
                                        <img src="${src}" class="d-block w-100" alt="Project Image ${index + 1}">
                                    </div>
                                `).join('')}
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#project-carousel" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#project-carousel" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    `;
            modalBodyContent.innerHTML = carouselHtml;
        }
    }
});