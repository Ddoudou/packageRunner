<template>
    <div class="fileSelect">
        <a-input-search v-model:value="value" placeholder="请输入package文件路径" size="large" @search="onSelect">
            <template #enterButton>
                <a-button>选择</a-button>
            </template>
        </a-input-search>
    </div>
    <div class="scriptList">
        <a-list item-layout="horizontal" :data-source="scriptList">
            <template #renderItem="{ item }">
                <a-list-item>
                    <a-list-item-meta :description="item.script">
                        <template #title>
                            <a href="https://www.antdv.com/">{{ item.name }}</a>
                        </template>
                        <template #avatar>
                            <a-avatar src="https://joeschmoe.io/api/v1/random" />
                        </template>
                    </a-list-item-meta>
                </a-list-item>
            </template>
        </a-list>
    </div>
</template>
<script setup lang="ts" >
import { ref } from 'vue';
import { ipcRenderer } from 'electron'

interface ScriptList {
    name: string,
    script: string
}

let value = ref<string>('');

let scriptList = ref<ScriptList[]>([]);
function onSelect() {
    ipcRenderer.invoke('setPackagePath').then(res => {
        if (!res) return
        const script = res.scripts;
        scriptList = ref(Object.keys(script).map(val => {
            return {
                name: val,
                script: script[val]
            }
        }))
        console.log(scriptList);


    });
}


</script>
<style>
.fileSelect {
    width: 100%;
}
</style>