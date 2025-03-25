/*
    Version 2.0: 
    let html = new DomBuilder('h1.intro+p>lorem^ul>li*3>a')

    Version 1.0:
    let footInfo = new DomBuilder();
    footInfo.create('div')
            .add(span, 'Styling by PicoCSS')
            .addText(' | ')
            .add(span, 'Copyleft by Dan Gilleland');
    let fragment = footInfo.fragment;
    foot.appendChild(fragment);
*/
const DomBuilder = class {
    constructor() {
        this.fragment = null; // blank for now
    }

    // Methods
    create(tagName) {
        this.fragment = document.createElement(tagName);
        return this;
    }

    add(tagName, text) {
        let tag = document.createElement(tagName);
        if(text) {
            let node = document.createTextNode(text);
            tag.appendChild(node);
        }
        this.fragment.appendChild(tag);
        return this;
    }

    addText(text) {
        let node = document.createTextNode(text);
        this.fragment.appendChild(node);
        return this;
    }
}

export { DomBuilder }
