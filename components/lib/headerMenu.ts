export function initHeaderHoverMenu() {
    const items = document.querySelectorAll<HTMLLIElement>(
        '.hrresourec_dropdown_left li'
    );
    const contents = document.querySelectorAll<HTMLElement>('.content-item');

    if (!items.length || !contents.length) return;

    items.forEach((item, i) => {
        const handler = () => {
            items.forEach(li => li.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            item.classList.add('active');
            contents[i]?.classList.add('active');
        };

        item.addEventListener('mouseenter', handler);
    });
}
