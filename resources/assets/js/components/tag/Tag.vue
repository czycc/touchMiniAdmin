<template>
    <div id="category-tag">

        <p style="text-align:right;padding-bottom:20px">
            <Button type="success" size="small" @click="createModal = true">新增</Button>
        </p>

        <Table :columns="columns" :data="data"></Table>

        <Modal v-model="delModal" width="360">
            <p slot="header" style="color:#f60;text-align:center">
                <Icon type="ios-information-circle"></Icon>
                <span>删除确认</span>
            </p>
            <div style="text-align:center">
                <p>删除后会清除所有文章视频已添加的标签</p>
                <p>确认删除？</p>
            </div>
            <div slot="footer">
                <Button type="error" size="large" long :loading="modal_loading" @click="delData">删除</Button>
            </div>
        </Modal>

        <Modal v-model="editModal" title="修改标签" @on-ok="editData">
            <section class="modal-input">
                <p>
                    <label for="name"> 标签名*：</label>
                    <Input v-model.trim="selectTag.name" name="name"></Input>
                </p>
                <p>
                    <label for="description">描述：</label>
                    <Input v-model.trim="selectTag.description" name="description"></Input>
                </p>
            </section>
        </Modal>

        <Modal v-model="createModal" title="新增标签" @on-ok="createData">
            <section class="modal-input">
                <p>
                    <label for="name"> 标签名*：</label>
                    <Input v-model.trim="createTag.name" name="name"></Input>
                </p>
                <p>
                    <label for="description">描述：</label>
                    <Input v-model.trim="createTag.description" name="description"></Input>
                </p>
            </section>
        </Modal>
    </div>
</template>

<script>
export default {
    name: "Tag",
    data() {
        return {
            createModal: false,
            delModal: false,
            editModal: false,
            modal_loading: false,

            createTag: {
                name: "",
                description: ""
            },

            selectTag: {
                id: -1,
                name: "",
                description: ""
            },

            columns: [
                {
                    title: "ID",
                    key: "id",
                    sortable: true
                },
                {
                    title: "标签名",
                    key: "name"
                },
                {
                    title: "描述",
                    key: "description"
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
                                            this.selectTag = params.row;
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
                                            this.selectTag = params.row;
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
            axios.get("/tags").then(res => {
                this.data = res.data.data;
            });
        },
        editData() {
            axios({
                method: "PUT",
                url: `/tags/${this.selectTag.id}`,
                params: this.selectTag
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
        delData() {
            this.modal_loading = true;
            axios({
                method: "delete",
                url: `/tags/${this.selectTag.id}`
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
        createData() {
            axios({
                method: "POST",
                url: `/tags`,
                params: this.createTag
            })
                .then(res => {
                    this.$Message.info("创建成功");
                    this.updateData();
                    this.createTag = {};
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
.modal-input {
    margin: 1em 2.5em 1em;
}
</style>
