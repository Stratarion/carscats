<template>
    <div>
        <div class="tab">
            <div class="tab-item">
               E-mail
            </div>
            
        </div>

        <div class="editor" id="editor">
            <h4>Тема рассылки</h4>
            <input type="text" v-model="theme">
            <h4>Текст рассылки</h4>
            <quill-editor v-model="content"
                            ref="myQuillEditor"
                            style="height: 100px; margin-bottom: 50px;"
                            :options="editorOption"
                            @blur="onEditorBlur($event)"
                            @focus="onEditorFocus($event)"
                            @ready="onEditorReady($event)">
            </quill-editor>
            <button @click="sendEmails">Отправить</button>
        </div>
    </div>
</template>

<script>

import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'
import admin from '@/services/admin';


    export default {
        components: {
            quillEditor,
            
        },
        created() {
           
        },
        data () {
            return {
                content: '',
                theme: '',
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
            async sendEmails() {
                
                await admin.sendEmails({
                    mail: this.content,
                    theme: this.theme
                }).then((res) => {
                    if (res.status === 200) {
                        this.content = ''
                    } else {
                        alert('Что-то пошло не так...', res)
                    }
                    
                })
                this.content = ''
                this.theme = ''
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