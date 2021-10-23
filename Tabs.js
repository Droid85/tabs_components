class Tabs {
    static TABS_CONTAINER_CLASS = 'tabs-container';
    static TAB_CLASS = 'tab';
    static CONTENT_BLOCK_CLASS = 'content-block';
    static ACTIVE_TAB_CLASS = 'active-tab';
    static ACTIVE_BLOCK_CLASS ='active-block';

    constructor(el) {
        this.el = el;
        el.addEventListener('click', this.handleClick.bind(this));
        this.setClasses(this.el);
    }

    handleClick(e) {
        const tabsArr = [...document.querySelectorAll(`.${Tabs.TAB_CLASS}`)];
        let tabIndex = tabsArr.indexOf(e.target);
        if (e.target.classList.contains(Tabs.TAB_CLASS)) {
			const blockConteiner = this.el.querySelectorAll(`.${Tabs.CONTENT_BLOCK_CLASS}`);
			Array.prototype.forEach.call(blockConteiner, (child) => {
				if (child.classList.contains(Tabs.ACTIVE_BLOCK_CLASS)) {
					child.classList.remove(Tabs.ACTIVE_BLOCK_CLASS);
				}
			});

            const tabsContainer = this.el.querySelectorAll(`.${Tabs.TAB_CLASS}`);
            Array.prototype.forEach.call(tabsContainer, (child) => {
                if (child.classList.contains(Tabs.ACTIVE_TAB_CLASS)) {
                    child.classList.remove(Tabs.ACTIVE_TAB_CLASS);
                }
            });

            let blockIndex = [...blockConteiner];
            blockIndex[tabIndex].classList.toggle(Tabs.ACTIVE_BLOCK_CLASS);
            tabsArr[tabIndex].classList.toggle(Tabs.ACTIVE_TAB_CLASS);
		}
    }

    setClasses(el) {
        const tabElements = el.firstElementChild;
        tabElements.classList.add(Tabs.TABS_CONTAINER_CLASS);
        const tab = tabElements.children;
        for (let el of tab) {
            el.classList.add(Tabs.TAB_CLASS);
        }
        const contentBlock = el.lastElementChild;
        const contentElement = contentBlock.children;
        for (let el of contentElement) {
            el.classList.add(Tabs.CONTENT_BLOCK_CLASS);
        }
    }
}
