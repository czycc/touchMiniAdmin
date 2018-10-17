<template>
    <section id="edit-form">
        <p>
            <label for="id">ID：</label>
            <Input v-model="formData.id" disabled></Input>
        </p>
        <p>
            <label for="title">标题：</label>
            <Input v-model="formData.title"></Input>
        </p>
        <p>
            <label for="desc">描述：</label>
            <Input v-model="formData.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..." />
        </p>
        <p>
            <label for="video_url">头图链接：</label>
            <Upload type="drag" name="file" :headers="uploadHeaders" :data="{type:'image'}" accept="image/*" :action="uploadUrl" :on-success="handleUpdImgSuc">
                <div style="padding: 20px 0">
                    <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                    <p>点击\拖拽上传\直接输入头图链接</p>
                </div>
            </Upload>
            <Input v-model="formData.top_img" placeholder="输入头图链接"></Input>
        </p>
        <p>
            <label for="video_url">视频链接：</label>
            <Upload type="drag" name="file" :headers="uploadHeaders" :data="{type:'video'}" accept="video/*" :action="uploadUrl" :on-success="handleUpdVideoSuc">
                <div style="padding: 20px 0">
                    <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                    <p>点击\拖拽上传\直接输入视频链接</p>
                </div>
            </Upload>
            <Input v-model="formData.video_url" placeholder="输入视频链接"></Input>
        </p>
        <p>
            <label for="category">视频分类：</label>
            <Select v-model="formData.video_category_id">
                <Option v-for="item in categories" :value="item.id" :key="item.id">{{ item.category }}</Option>
            </Select>
        </p>
        <p>
            <label for="created_at">创建时间：</label>
            <Input v-model="formData.created_at" disabled></Input>
        </p>
        <p>
            <label for="updated_at">上次更新时间：</label>
            <Input v-model="formData.updated_at" disabled></Input>
        </p>
        <p style="margin:10px;">
            <Button type="primary" shape="circle" @click="submit">提交</Button>
            <Button type="warning" shape="circle" @click="fetchData">重置</Button>
        </p>
    </section>
</template>

<script>
export default {
    data() {
        return {
            uploadUrl: `${process.env.MIX_APP_URL}/file/upload`,
            uploadHeaders: {
                "X-CSRF-TOKEN":
                    window.axios.defaults.headers.common["X-CSRF-TOKEN"]
            },
            formData: {
                id: -1,
                title: "",
                desc: "",
                video_url: "",
                top_img: "",
                video_category_id: -1,
                user_id: 1,
                created_at: "",
                updated_at: ""
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
            /* show video-id info */
            axios.get(`/videos/${this.$route.params.id}`).then(res => {
                this.formData = res.data.data;
            });
            /* 获取视频分类列表 */
            axios.get("/category/videos").then(res => {
                this.categories = res.data.data;
            });
        },

        /* 视频上传成功回调 */
        handleUpdVideoSuc(res, file) {
            this.formData.video_url = file.response;
            console.log(file);
        },

        /* 图片上传成功回调 */
        handleUpdImgSuc(res, file) {
            this.formData.top_img = file.response;
            console.log(file);
        },

        /* 表单提交 */
        submit() {
            axios({
                url: `/videos/${this.formData.id}`,
                method: "PUT",
                params: this.formData
            })
                .then(res => {
                    this.$Message.success("修改成功");
                    this.$router.push({
                        path: "/admin/videos"
                    });
                })
                .catch(error => {
                    console.log(error);
                    this.$Message.error("提交失败");
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
</style>
