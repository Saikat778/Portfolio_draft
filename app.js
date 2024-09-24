(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();


document.getElementById("download-btn").addEventListener("click", function(event) {
    event.preventDefault(); 
    
    fetch('Abdulla Al-Amin_CV.pdf') 
    .then(response => response.blob())
    .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Abdulla Al-Amin_CV.pdf'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url); 
    });
});

document.getElementById('contact-id').addEventListener('submit', function() {
    setTimeout(() => {
        this.reset(); // 
    }, 700); 
});
