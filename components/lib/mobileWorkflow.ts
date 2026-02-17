export function initMobileWorkflow() {
    if (typeof window === "undefined") return;

    const leftBox = document.querySelector(".soft_workflow_left") as HTMLElement | null;
    if (!leftBox) return;

    const titleBar1 = leftBox.querySelector(".mobile-selected-title") as HTMLElement | null;
    const titleBar = leftBox.querySelector(".mobile-selected-title h3") as HTMLElement | null;

    const items = Array.from(leftBox.querySelectorAll(".workflow-item")) as HTMLElement[];
    const contents = Array.from(document.querySelectorAll(".content_box")) as HTMLElement[];

    let clickMode = false;

    function clearActive() {
        items.forEach(i => i.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));
    }

    // DEFAULT ACTIVE
    if (items.length && contents.length) {
        const firstTitle = items[0].querySelector(".wf-main-title h3");
        items[0].classList.add("active");
        contents[0].classList.add("active");
        if (firstTitle && titleBar) {
            titleBar.textContent = firstTitle.textContent || "";
        }
    }

    // MOBILE OPEN / CLOSE
    titleBar1?.addEventListener("click", () => {
        leftBox.classList.toggle("open");
    });

    // ITEM CLICK
    items.forEach((item, index) => {
        const title = item.querySelector(".wf-main-title h3");
        const arrow = item.querySelector(".wf-main-title .arrow");

        title?.addEventListener("click", () => {
            clickMode = true;

            clearActive();
            item.classList.add("active");
            contents[index]?.classList.add("active");

            if (titleBar) {
                titleBar.textContent = title.textContent || "";
            }

            leftBox.classList.remove("open");

            const top =
                contents[index].getBoundingClientRect().top +
                window.pageYOffset -
                100;

            window.scrollTo({ top, behavior: "smooth" });

            setTimeout(() => {
                clickMode = false;
            }, 600);
        });

        arrow?.addEventListener("click", (e) => {
            e.stopPropagation();
            item.classList.toggle("submenu-open");
        });
    });

    // SCROLL SYNC
    const onScroll = () => {
        if (clickMode) return;

        contents.forEach((content, i) => {
            const rect = content.getBoundingClientRect();

            if (rect.top >= 0 && rect.top < 150) {
                clearActive();
                items[i]?.classList.add("active");
                contents[i]?.classList.add("active");

                const t = items[i]?.querySelector(".wf-main-title h3");
                if (t && titleBar) {
                    titleBar.textContent = t.textContent || "";
                }
            }
        });
    };

    window.addEventListener("scroll", onScroll);

    // CLEANUP (important for Next.js)
    return () => {
        window.removeEventListener("scroll", onScroll);
    };
}
