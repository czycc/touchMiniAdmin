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
            <label for="video_url">视频链接：</label>
            <Upload type="drag" accept="video/*" action="{{ window.baseUrl}}">
                <div style="padding: 20px 0">
                    <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                    <p>点击或者拖拽上传</p>
                </div>
            </Upload>
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
            <Button type="primary" shape="circle">Circle</Button>
            <Button type="primary" shape="circle">Circle</Button>
        </p>
    </section>
</template>

<script>
export default {
    data() {
        return {
            formData: {
                id: -1,
                title: "",
                desc: "",
                video_url: "",
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
