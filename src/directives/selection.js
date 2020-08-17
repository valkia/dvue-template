module.exports = {
    bind: function (el, binding) { // 每当指令绑定到元素上的时候，会立即执行这个bind函数，只执行一次
        const activeClassName = binding.value.activeClassName;
        const className = binding.value.className;
        el.children.forEach(c => {
            c.classList.add(className);
        })//给子元素css
        el.children[0].classList.add(activeClassName);//默认选中第一个

    },
    inserted: function (el) { // inserted 表示元素插入到DOM中的时候，会执行inserted函数【触发一次】
        console.log("inserted");
    },
    update: function (el, binding, vnode, oldVnode) { // 当VNode更新的时候，会执行updated，可能会触发多次
        const className = binding.value.className;
        const activeClassName = binding.value.activeClassName;
        const newCurIndex = binding.value.curIndex;
        const oldCurIndex = binding.oldValue.curIndex;

        if (newCurIndex != oldCurIndex) {
            el.children[oldCurIndex].classList.remove(activeClassName);
            el.children[newCurIndex].classList.add(activeClassName);
        }

    },
}