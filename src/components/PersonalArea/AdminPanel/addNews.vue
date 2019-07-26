<template>
    <div>
        <div class="tab">
            <div class="tab-item">
                Добавить новость
            </div>
        </div>
        <div>
            <div class="editor" id="editor">
                <h4>Заголовок новости</h4>
                <input type="text" v-model="title">
                <h4>Текст новости</h4>
                <quill-editor v-model="content"
                                ref="myQuillEditor"
                                style="height: 100px; margin-bottom: 50px;"
                                :options="editorOption"
                                @blur="onEditorBlur($event)"
                                @focus="onEditorFocus($event)"
                                @ready="onEditorReady($event)">
                </quill-editor>
                <button @click="sendNews">Отправить</button>
            </div>
        </div>
    </div>
</template>

<script>

import newsService from '@/services/NewsService'


import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'
    export default {

        components: {
            quillEditor,
            
        },

        data () {
            return {
                content: '',
                title: '',
                editorOption: {
                    theme: 'snow'
                },
            }
        },

        methods: {
            onEditorBlur() {

            },
            onEditorFocus() {

            },
            onEditorReady() {

            },
            async sendNews() {
                await newsService.addNews({
                    title: this.title,
                    text: this.content
                }).then(() => {
                    this.clearData()
                })
                
            },
            clearData() {
                this.title = ''
                this.content = ''
            }
        }
        
    }
</script>

<style scoped>

.tab {
    width: 100%;
    border-bottom: 1px solid #ebedf2;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 50px;

}

.tab-item {
    padding: 20px 10px;
    border-bottom: 1px solid #22456c;
    margin-bottom: -1px;
    margin-left: 30px;
    color: #22456c;
}

.editor {
    width: 90%;
    margin: 0 auto;
    position: relative;
    padding-bottom: 100px;
}

.editor button {
    position: absolute;
    bottom: 20px;
    right: 10px;
    padding: 8px 25px;
    background-color: #5ec75e;
    color: #fff;
    cursor: pointer;
}

.editor input {
    border: 1px solid grey;
    padding: 10px 15px;
    width: 100%;
}

.editor h4 {
    margin-bottom: 15px;
}

.editor h4:not(:first-child) {
    margin-top: 15px;
}

</style>