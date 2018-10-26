<template>
    <section id="edit-form">
        <p>
            <label for="title">标题：</label>
            <Input v-model="formData.title"></Input>
        </p>
        <p>
            <label for="category">文章分类：</label>
            <Select v-model="formData.article_category_id">
                <Option v-for="item in categories" :value="item.id" :key="item.id">{{ item.category }}</Option>
            </Select>
        </p>
        <p>
            <label for="desc">描述：</label>
            <Input v-model="formData.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..." />
        </p>
        <p>
            <label for="img_url">头图链接：</label>
            <Upload type="drag" name="file" :headers="uploadHeaders" :data="{type:'image'}" accept="image/*" :action="uploadUrl" :on-success="handleUpdImgSuc">
                <div style="padding: 20px 0">
                    <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                    <p>点击\拖拽上传\直接输入头图链接</p>
                </div>
            </Upload>
            <Input v-model="formData.img_url" placeholder="输入头图链接"></Input>
        </p>

        <p id="editor">
            <label for="category">文章内容</label>：</label>
            <mavon-editor v-model="formData.content" ref=md :ishljs="true" @imgAdd="imgUpload" style="height: 100%"></mavon-editor>
        </p>
        <p style="margin:30px;">
            <Button type="primary" shape="circle" @click="submit">提交</Button>
            <Button type="warning" shape="circle" @click="fetchData">重置</Button>
        </p>
    </section>
</template>

<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
export default {
    name: "editor",
    components: {
        mavonEditor
    },
    data() {
        return {
            uploadUrl: `${process.env.MIX_APP_URL}/file/upload`,
            uploadHeaders: {
                "X-CSRF-TOKEN":
                    window.axios.defaults.headers.common["X-CSRF-TOKEN"]
            },
            formData: {
                title: "",
                desc: "",
                img_url: "",
                content: "",
                video_category_id: -1,
                user_id: 1
            },
            categories: []
        };
    },
    created: function() {
        this.fetchData();
    },
    methods: {
        /* 获取数据 */
        fetchData() {
            /* show article-id info */
            axios.get(`/articles/${this.$route.params.id}`).then(res => {
                this.formData = res.data.data;
            });
            /* 获取分类列表 */
            axios.get("/category/articles").then(res => {
                this.categories = res.data.data;
            });
        },

        /* 图片上传成功回调 */
        handleUpdImgSuc(res, file) {
            this.formData.img_url = file.response;
            console.log(file);
        },

        /* 表单提交 */
        submit() {
            axios({
                url: `/articles/${this.formData.id}`,
                method: "PUT",
                params: this.formData
            })
                .then(res => {
                    this.$Message.success("修改成功");
                    this.$router.push({
                        path: "/admin/articles"
                    });
                })
                .catch(error => {
                    console.log(error);
                    this.$Message.error("提交失败");
                });
        },
        imgUpload(pos, file) {
            let formdata = new FormData();
            formdata.append("file", file);
            formdata.append("type", "image");
            axios({
                url: "file/upload",
                method: "POST",
                data: formdata,
                headers: { "Content-Type": "multipart/form-data" }
            })
                .then(res => {
                    this.$refs.md.$img2Url(pos, res.data);
                    console.log(pos);
                })
                .catch(error => {
                    this.$Massage.error(error.response.data);
                });
        },
        editorSave() {
            axios({
                url: "/articles",
                method: "POST",
                data: {
                    content: this.about
                }
            })
                .then(res => {
                    this.$Message.success("保存成功");
                })
                .catch(error => {
                    this.$Message.error("出错");
                    console.log(error.response.data);
                });
        }
    }
};
</script>

<style>
#edit-form {
    max-width: 400px;
    font-size: 14px;
}
#editor {
    margin: 10px;
    height: 380px;
}
</style>
