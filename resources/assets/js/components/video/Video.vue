<template>
    <div id="videos">
        <p style="text-align:right;padding-bottom:20px">
            <Button type="success" size="small" @click="tableActions('create-item')">新增</Button>
        </p>

        <Table :columns="tableColumns" :data="tableData"></Table>

        <Modal v-model="delModal" width="360">
            <p slot="header" style="color:#f60;text-align:center">
                <Icon type="ios-information-circle"></Icon>
                <span>删除确认</span>
            </p>
            <div style="text-align:center">
                <p>删除后将不可恢复</p>
                <p>确认删除？</p>
            </div>
            <div slot="footer">
                <Button type="error" size="large" long :loading="modal_loading" @click="tableActions('delete-item')">删除</Button>
            </div>
        </Modal>

    </div>
</template>

<script>
export default {
    name: "Video",
    data() {
        return {
            delModal: false,
            modal_loading: false, //显示删除等待

            clickRow: {}, //点选的行数据

            showVideoModal: false,
            tableData: [],
            tableLoading: false,
            tableColumns: [
                {
                    title: "ID",
                    key: "id",
                    sortable: true,
                    maxWidth: 100
                },
                {
                    title: "标题",
                    key: "title"
                },
                {
                    title: "分类",
                    key: "category",
                    sortable: true,
                    maxWidth: 120,
                    align: "center",
                    render: (h, params) => {
                        return h("div", params.row.category.category);
                    }
                },
                {
                    title: "简介",
                    key: "desc",
                    tooltip: true
                },
                {
                    title: "头图链接",
                    key: "top_img",
                    tooltip: true
                },
                {
                    title: "视频链接",
                    key: "video_url",
                    tooltip: true
                },
                {
                    title: "创建时间",
                    key: "created_at",
                    sortable: true
                },
                {
                    title: "更新时间",
                    key: "updated_at",
                    sortable: true
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
                                            this.clickRow = params.row;
                                            this.tableActions(
                                                "edit-item",
                                                params.row.id
                                            );
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
                                            this.clickRow = params.row;
                                            this.delModal = true;
                                        }
                                    }
                                },
                                "删除"
                            )
                        ]);
                    }
                }
            ]
        };
    },
    created: function() {
        this.updateData();
    },
    methods: {
        /* 更新表格数据 */
        updateData() {
            this.tableLoading = true;
            axios.get("/videos").then(res => {
                this.tableData = res.data.data;
                this.tableLoading = false;
            });
        },
        /* 操作表格行数据 */
        tableActions(action, data) {
            if (action == "edit-item") {
                this.$router.push({
                    path: `/admin/videos/${data}/edit`
                });
            } else if (action == "delete-item") {
                this.modal_loading = true;
                axios({
                    method: "delete",
                    url: `/videos/${this.clickRow.id}`
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
            } else if (action == "create-item") {
                this.$router.push({
                    path: `/admin/videos/create`
                });
            } else {
                this.$Message.error("未知操作");
            }
        }
    }
};
</script>

<style>
</style>
