<!--
注入
import DSelect from "../../../components/DSelect";
components: {DSelect}
使用 默认显示的值是label(使用labelPropKey修改)，默认选中的值是value（使用valuePropKey修改）
<DSelect :options="[{label:'1',value:'1a'},{label:'2',value:'2a'}]" placeholder="场景" v-model="search.scene"/>
<DSelect :options="[{show:'1',choose:'1a'},{show:'2',choose:'2a'}]" labelPropKey="show" valuePropKey="choose" placeholder="场景" v-model="search.scene"/>
-->
<template>
    <div class="DSelect-wrap">
        <el-select v-model="selectedData" :placeholder="placeholder">
            <el-option v-if="type==='ObjectList'" v-for="(item,index) in options" :key="item.value"
                       :label="item[labelPropKey]"
                       :value="item[valuePropKey]"/>
            <el-option v-if="type==='StringList'" v-for="(item,index) in options" :key="item" :label="item"
                       :value="item"/>
        </el-select>
    </div>
</template>
<script>
    export default {
        name: "DSelect",
        props: {
            msgCode: {
                type: Number,
                default: 1
            },
            options: {
                type: Array,
                default: []
            },
            placeholder: String,
            labelPropKey: {
                type: String,
                default: "label"
            },
            valuePropKey: {
                type: String,
                default: "value"
            },
            type: {
                type: String,
                default: "ObjectList" //ObjectList:[{a:"xxx"}],StringList:["a","b"]
            },
            defaultValue: {
                type: [String,Number],
                default: ""
            }
        },
        data: function () {
            return {
                selectedData: "",
            };
        },
        methods: {},
        computed: {},
        filters: {},
        mounted: function () {
            this.selectedData = this.defaultValue;
        },
        watch: {
            selectedData(val) {
                console.log(`selectedData val:${val}`);
                this.$emit('input', val)
            },
        },

    };


</script>

<style scoped>
</style>
