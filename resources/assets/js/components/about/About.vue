<template>
    <div id="editor">
        <mavon-editor v-model="about" ref=md :ishljs="true" @imgAdd="imgUpload" style="height: 100%" @save="editorSave"></mavon-editor>
    </div>
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
            about: ""
        };
    },
    created: function() {
        this.fetchData();
    },
    methods: {
        /* 获取数据 */
        fetchData() {
            axios
                .get("/about")
                .then(res => {
                    console.log(res.data);
                    this.about = res.data.data;
                })
                .catch(error => {
                    console.error(error);
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
                url: "/about",
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
#editor {
    margin: auto;
    width: 80%;
    height: 580px;
}
</style>