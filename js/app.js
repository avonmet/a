// app.js
document.addEventListener('DOMContentLoaded', () => {
    let links = document.querySelectorAll('a');

    if (links) {
        links.forEach((link) => {
            link.onclick = (e) => {
                let body = document.querySelector('body');
                e.preventDefault();

                setTimeout(function() {
                    if (body.classList.contains('fade-out')) {
                        console.log('navigating...');
                        if (e.target.parentElement.href) {
                            window.location = e.target.parentElement.href;
                        } else if (e.target.href) {
                            window.location = e.target.href;
                        } else {
                            console.log('whoops', e.target.parentElement.href);
                        }
                    }
                }, 400);

                body.classList.add('fade-out');
            };
        });
    }
});
