<template>
    <a-layout style="min-height: 100vh;height: 100%;">
        <a-layout-sider v-model:collapsed="collapsed" collapsible>
            <div class="logo" />
            <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
                <a-menu-item key="1">
                    <pie-chart-outlined />
                    <span>运行</span>
                </a-menu-item>
                <a-menu-item key="2">
                    <desktop-outlined />
                    <span>设置</span>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <!-- <a-layout-header style="background: #fff; padding: 0" /> -->
            <a-layout-content style="margin: 0 16px;overflow-y: auto;">
                <a-breadcrumb style="margin: 16px 0">
                    <a-breadcrumb-item>设置</a-breadcrumb-item>
                </a-breadcrumb>
                <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
                    <select-path></select-path>
                </div>
            </a-layout-content>
            <a-layout-footer style="text-align: center">
                Dou Dou ©2022 Created by Electron
            </a-layout-footer>
        </a-layout>
    </a-layout>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import SelectPath from '../components/SelectPath.vue';

let collapsed = ref<boolean>(false);
let selectedKeys = ref<string[]>(['1']);
</script>
<style>
#components-layout-demo-side .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
    background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
    background: #141414;
}
</style>
