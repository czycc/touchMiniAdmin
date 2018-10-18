<template>
    <div id="category-article">
        <p style="text-align:right;padding-bottom:20px">
            <Input v-model.trim="createCategory" placeholder="请输入类别名" style="width:150px;padding-right:10px"></Input>
            <Button type="success" size="small" @click="create()">新增</Button>
        </p>

        <Table :columns="columns" :data="data"></Table>

        <Modal v-model="delModal" width="360">
            <p slot="header" style="color:#f60;text-align:center">
                <Icon type="ios-information-circle"></Icon>
                <span>删除确认</span>
            </p>
            <div style="text-align:center">
                <p>删除后会类别下的文章将不再显示</p>
                <p>确认删除？</p>
            </div>
            <div slot="footer">
                <Button type="error" size="large" long :loading="modal_loading" @click="delCategory">删除</Button>
            </div>
        </Modal>

        <Modal v-model="editModal" title="修改类别" @on-ok="editCategory">
            <Input v-model.trim="selectCategory"></Input>
        </Modal>
    </div>
</template>

<script>
export default {
    name: "Videos",
    data() {
        return {
            delModal: false,
            editModal: false,
            selectCategory: null,
            createCategory: "",
            selectIndex: -1,
            modal_loading: false,
            columns: [
                {
                    title: "ID",
                    key: "id",
                    sortable: true
                },
                {
                    title: "类别名称",
                    key: "category"
                },
                {
                    title: "操作",
                    key: "action",
                    width: 150,
                    align: "center",
                    render: (h, params) => {
                        return h("div", [
                            h(
                                "Button",
                                {
                                    props: {
                                        type: "primary",
                                        size: "small"
                                    },
                                    style: {
                                        marginRight: "5px"
                                    },
                                    on: {
                                        click: () => {
                                            this.selectIndex = params.index;
                                            this.selectCategory = this.data[
                                                params.index
                                            ]["category"];
                                            this.editModal = true;
                                        }
                                    }
                                },
                                "编辑"
                            ),
                            h(
                                "Button",
                                {
                                    props: {
                                        type: "error",
                                        size: "small"
                                    },
                                    on: {
                                        click: () => {
                                            this.selectIndex = params.index;
                                            this.delModal = true;
                                        }
                                    }
                                },
                                "删除"
                            )
                        ]);
                    }
                }
            ],
            data: []
        };
    },
    created: function() {
        this.updateData();
    },
    methods: {
        updateData() {
            axios.get("/category/articles").then(res => {
                this.data = res.data.data;
            });
        },
        editCategory() {
            axios({
                method: "PUT",
                url: `/category/articles/${this.data[this.selectIndex]["id"]}`,
                params: {
                    id: this.selectIndex,
                    category: this.selectCategory
                }
            })
                .then(res => {
                    this.$Message.info("修改成功");
                    this.updateData();
                })
                .catch(res => {
                    console.error(res);
                    this.$Message.error("发生错误");
                    this.editModal = false;
                });
        },
        delCategory() {
            this.modal_loading = true;
            axios({
                method: "delete",
                url: `/category/articles/${this.data[this.selectIndex]["id"]}`
            })
                .then(res => {
                    this.$Message.info("删除成功");
                    this.updateData();
                    this.modal_loading = false;
                    this.delModal = false;
                })
                .catch(res => {
                    this.$Message.error("发生错误");
                    this.modal_loading = false;
                    this.delModal = false;
                });
        },
        create() {
            axios({
                method: "POST",
                url: `/category/articles`,
                params: {
                    category: this.createCategory
                }
            })
                .then(res => {
                    this.$Message.info("创建成功");
                    this.updateData();
                    this.createCategory = "";
                })
                .catch(res => {
                    this.$Message.error("发生错误");
                    console.error(res);
                });
        }
    }
};
</script>

<style>
</style>
