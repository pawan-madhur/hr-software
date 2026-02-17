export function initAccordion() {
    const items = document.querySelectorAll<HTMLElement>('.accordion-item');

    if (!items.length) return;

    items.forEach((item) => {
        const header = item.querySelector<HTMLElement>('.accordion-header');
        const toggleBtn = item.querySelector<HTMLElement>('.toggle-btn');

        if (!header || !toggleBtn) return;

        const handleClick = () => {
            const isActive = item.classList.contains('active');

            // Close all items
            items.forEach(i => {
                i.classList.remove('active');
                const btn = i.querySelector<HTMLElement>('.toggle-btn');
                if (btn) btn.textContent = '+';
            });

            // Open clicked one
            if (!isActive) {
                item.classList.add('active');
                toggleBtn.textContent = '×';
            }
        };

        header.addEventListener('click', handleClick);
    });
}
