document.addEventListener("DOMContentLoaded", function() {
    const logs = document.querySelectorAll('.device-log li');

    logs.forEach(log => {
        const status = log.getAttribute('data-status');

        switch (status) {
            case 'safe':
                log.style.backgroundColor = 'lightgreen'; // Aman
                break;
            case 'warning':
                log.style.backgroundColor = 'lightcoral'; // Peringatan
                break;
            case 'unusual':
                log.style.backgroundColor = 'lightgoldenrodyellow'; // Tidak wajar
                break;
            default:
                log.style.backgroundColor = 'transparent'; // Default
        }
    });
});
