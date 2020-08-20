module.exports = {
    componentUpdated: function (el, binding) { // 值有可能是异步获取，需要在componentUpdated后才能拿到
        const activeClassName = binding.value.activeClassName;
        const className = binding.value.className;
        const curIndex = binding.value.curIndex;
        el.children.forEach(c => {
            c.classList.add(className);
        })//给子元素css
        if (curIndex === 0) {
            el.children[0].classList.add(activeClassName);//默认选中第一个
        }


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
            if (oldCurIndex >= 0) {
                el.children[oldCurIndex].classList.remove(activeClassName);
            }

            el.children[newCurIndex].classList.add(activeClassName);
        }

    },
}