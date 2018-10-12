<template>
    <div id="category-video">
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
            <p>Content of dialog</p>
            <p>Content of dialog</p>
            <p>Content of dialog</p>
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
            selectIndex: 0,
            modal_loading: false,
            columns: [
                {
                    title: "ID",
                    key: "id"
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
                                            this.selectIndex = params.row.id;
                                            this.edit(params.row.id);
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
                                            this.selectIndex = params.row.id;
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
            let that = this;
            axios.get("/category/videos").then(function(res) {
                that.data = res.data.data;
            });
        },
        editCategory(index) {},
        delCategory() {
            this.modal_loading = true;
            let that = this;
            axios({
                method: "delete",
                url: `/category/videos/${that.selectIndex}`
            })
                .then(() => that.$Massage.info("删除成功"))
                .catch(function(params) {
                    that.$Massage.error("发生错误");
                    this.modal_loading = false;
                    this.delModal = false;
                });
        },
        create() {}
    }
};
</script>

<style>
</style>
