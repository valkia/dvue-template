<template class="table">
    <div>
        <el-table
                :ref="refName"
                :max-height="height"
                row-key="id"
                :data="tableData"
                stripe
                style="width: 100%"
                highlight-current-row
                @row-click="handleCurrentChange"
                @selection-change="handleSelectionChange"
                @row-dblclick="dblclick">
            <el-table-column v-if="multipleFlag"
                             type="selection"
                             width="55">
            </el-table-column>
            <el-table-column v-if="seqFlag"
                             type="index"
                             width="50">
            </el-table-column>
            <el-table-column v-for="(item,index) in tableProp" :key="item.prop" v-if="item.type==='enum'"
                             :prop="item.prop"
                             :label="item.label" :formatter="enumFormat">
            </el-table-column>
            <el-table-column v-for="(item,index) in tableProp" :key="item.prop"
                             v-if="item.type!=='img'&&item.type!=='enum'"
                             :prop="item.prop"
                             :label="item.label">
            </el-table-column>

            <el-table-column v-for="(item,index) in tableProp" :key="item.prop" v-if="item.type==='img'"
                             :label="item.label">
                <template slot-scope="scope">
                    <span style="color: rgb(0, 0, 204);cursor: pointer;" @click="showImg(scope.row.path)">查看图片</span>
                    <!--{{ scope.row.path }}-->
                </template>
            </el-table-column>
        </el-table>

        <el-dialog :visible.sync="dialogImgVisible" :append-to-body="true" width="30%">
            <div><img :src="imgPath" style="    width: 100%;height: 100%;"></div>
        </el-dialog>

    </div>
</template>
<script>

    import url from '../../../../request/api/base'

    export default {
        name: "AdminTable",
        props: {
            refName: {
                type: String,
                default: function () {
                    return "list"
                }
            },
            enumProps: {
                "fruit": ["全部", "苹果", "梨子", "香蕉"]
            },
            seqFlag: false,
            multipleFlag: false,
            //对象或数组默认值必须从一个工厂函数获取!所以要这样初始化 。 初始化 [] 会warn
            tableData: {
                type: Array,
                default: function () {
                    return []
                }
            },
            tableProp: {
                type: Array,
                default: function () {
                    return []
                }
            },//表格字段名数组
            height: {
                type: [Number, String],
                default: -1
            },//表格高度 超出会出现滚动条

        },
        data: function () {
            return {
                dialogImgVisible: false,
                imgPath: "",
                lastRow: {}
            };
        },
        methods: {
            handleCurrentChange(item) {//单选
                console.log('AdminTable select')
                if (this.lastRow.id === item.id) {
                    //如果和上次选中的是同一行 去掉高亮
                    this.$refs[this.refName].setCurrentRow()
                }
                this.lastRow = item;
                this.$emit('selected-data', item);
            },
            dblclick(item) {
                console.log('dblclick' + item);
                this.$emit('dblclick-data', item);
            },
            showImg(path) {
                this.imgPath = url.baseUrl + path;
                console.log(this.imgPath);
                this.dialogImgVisible = true;
            },
            handleSelectionChange(items) {//多选
                console.log(`items:${items}`);
                this.$emit('selection-selected-change', items);
            },
            enumFormat(row, column) {

                let prop = this.enumProps[column.property];
                if (prop) {
                    return prop[row[column.property]];
                } else
                    return "";
            },
        },
        created() {

        },
        destroyed() {

        },
        computed: {},
        filters: {},
        mounted: function () {
        }


    };


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
