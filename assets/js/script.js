document.addEventListener('DOMContentLoaded', function () {
    const slideImages = document.querySelectorAll('.image-wrapper img');
    const closeOverlay = document.querySelector('.close');

    slideImages.forEach((img, index) => {
        img.addEventListener('click', () => {
            showOverlay(index);
        });
    });

    closeOverlay.addEventListener('click', hideOverlay);

    function showOverlay(index) {
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        const overlayImage = document.createElement('img');
        overlayImage.src = slideImages[index].src;
        overlay.appendChild(overlayImage);
        document.body.appendChild(overlay);
        overlay.style.display = 'flex';

        overlay.addEventListener('click', () => {
            overlay.style.display = 'none';
        });
    }

    function hideOverlay() {
        const overlay = document.querySelector('.overlay');
        overlay.style.display = 'none';
    }
});

document.getElementById("downloadButton").addEventListener("click", function() {
    var fileUrl = "assets/files/LongHLEDA-CV.pdf";// Link file cv here
    var link = document.createElement("a");
    link.href = fileUrl;
    link.download = "LongHLEDA-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});