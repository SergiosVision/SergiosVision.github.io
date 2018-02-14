import Smooth from '../../index'

class Parallax extends Smooth {
    
    constructor(opt) {
        
        super(opt);

        this.createExtraBound();
        
        this.resizing = false;
        this.cache = null;
        this.dom.divs = Array.prototype.slice.call(opt.divs, 0)
    }
    
    createExtraBound() {

        ['getCache']
        .forEach((fn) => this[fn] = this[fn].bind(this))
    }
    
    resize() {

        this.resizing = true;

        this.getCache();
        super.resize();
        
        this.resizing = false
    }

    getCache() {

        this.cache = [];
        console.log(this.vars)
        const unit = (this.vars.width / 3);

        this.dom.divs.forEach((el, index) => {

            el.style.display = 'inline-block';
            el.style.transform = 'none';
            
            const scrollX = this.vars.target;
            const bounding = el.getBoundingClientRect();
            const bounds = {
                el: el,
                state: true,
                left: bounding.left + scrollX,
                right: bounding.right + scrollX,
                center: unit / 2
            };

            this.cache.push(bounds)
        });

        this.dom.section.style.width = `${this.vars.width}px`; // Ширина Блока родителя
        this.dom.parentSection.style.width = `${this.vars.width}px`;
        this.dom.parentSection.style.overflow = 'hidden';
        var getFirstPos = this.dom.divs[this.dom.divs.length - 1].getBoundingClientRect().left;
        var getLastPos = this.dom.divs[this.dom.divs.length - 1].offsetWidth + this.options.fixOffset;

        this.vars.bounding = (getFirstPos + getLastPos) - this.vars.width; // Произвел перерасчет этого дерьма!!!
    }
    
    run() {

        this.dom.section.style[this.prefix] = this.getTransform(this.vars.current * -1);
        
        super.run()
    }

}

export default Parallax