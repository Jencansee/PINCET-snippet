    document.addEventListener('mousemove', function (e) {
            this.querySelectorAll('.cloud').forEach(el => {
            const value = el.getAttribute('init-value');
            const x = (window.innerWidth - e.pageX * value) / 100;
            const y = (window.innerHeight - e.pageY * value) / 100;
    
            el.style.transform = `
                translateX(${x}px)
                translateY(${y}px)
            `;
        });
    });