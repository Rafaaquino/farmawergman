let hasCountStarted = false;

        function isElementInViewport(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        function startCounting() {
            const counters = document.querySelectorAll('[data-counter]');

            counters.forEach(counter => {
                const target = parseInt(counter.parentElement.getAttribute('data-count'), 10);
                let count = 0;

                const intervalId = setInterval(() => {
                    count++;
                    counter.innerText = count;

                    if (count >= target) {
                        clearInterval(intervalId);
                    }
                }, 1); // A cada 10ms para uma contagem mais rápida
            });
        }

        window.addEventListener('scroll', function() {
            const countSection = document.getElementById('count');

            if (isElementInViewport(countSection) && !hasCountStarted) {
                hasCountStarted = true;
                startCounting();
            }
        });