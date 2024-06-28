document.addEventListener('DOMContentLoaded', () => {
    const toastOverlay = document.getElementById('toast-overlay');

    const showToast = (type, message) => {
        const toast = document.createElement('div');
        toast.className = `toast ${type}-toast`;
        toast.innerHTML = `
            <span class="material-symbols-outlined toast-icon">
                ${type === 'success' ? 'check_circle' :
                type === 'danger' ? 'error' :
                type === 'info' ? 'info' :
                'warning'}
            </span>
            <span>${message}</span>
        `;

        toastOverlay.appendChild(toast);
        toastOverlay.style.opacity = 1;
        toastOverlay.style.visibility = 'visible';

        setTimeout(() => {
            toast.style.opacity = 0;
            setTimeout(() => {
                toast.remove();
                if (!toastOverlay.hasChildNodes()) {
                    toastOverlay.style.opacity = 0;
                    toastOverlay.style.visibility = 'hidden';
                }
            }, 500);
        }, 3000);
    };

    document.querySelector('.success-toast').addEventListener('click', () => {
        showToast('success', 'Submit successful');
    });

    document.querySelector('.danger-toast').addEventListener('click', () => {
        showToast('danger', 'Submission failed');
    });

    document.querySelector('.info-toast').addEventListener('click', () => {
        showToast('info', 'This is some information');
    });

    document.querySelector('.warning-toast').addEventListener('click', () => {
        showToast('warning', 'This is a warning');
    });
});
