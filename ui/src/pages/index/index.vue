<!--
 Copyright (C) 2025 Template Author

 This file is part of miniapp-template.

 miniapp-template is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 miniapp-template is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with miniapp-template.  If not, see <https://www.gnu.org/licenses/>.
-->

<template>
    <scroller class="container" scroll-direction="vertical" :show-scrollbar="true">
        <div class="section">
            <text class="section-title">Counter</text>
            <div class="item">
                <text class="item-text">Count: {{ count }}</text>
            </div>
            <div class="btn-row">
                <Button class="btn btn-danger" @click="decrement">-</Button>
                <Button class="btn btn-success" @click="increment">+</Button>
                <Button class="btn btn-warning" @click="reset">Reset</Button>
            </div>
        </div>

        <div class="section">
            <text class="section-title">Brightness</text>
            <slider
                :min="0"
                :max="100"
                :step="1"
                v-model="brightness"
                active-color="#007acc"
                background-color="#333333"
                class="slider"
                @change="onBrightnessChange"
            ></slider>
            <div class="item">
                <text class="item-text">Value: {{ brightness }}</text>
            </div>
        </div>

        <div class="section">
            <text class="section-title">Storage</text>
            <div class="item">
                <text class="item-text">Auto-save</text>
                <Switch
                    v-model="autoSave"
                    open-color="#28a745"
                    @change="onAutoSaveChange"
                ></Switch>
            </div>
            <div class="btn-row">
                <Button class="btn btn-primary" @click="save">Save</Button>
                <Button class="btn btn-info" @click="load">Load</Button>
            </div>
        </div>

        <div class="section">
            <text class="section-title">Status</text>
            <div class="item">
                <text class="item-text">{{ status }}</text>
            </div>
        </div>
    </scroller>
</template>

<style lang="less" scoped>
@import url('index.less');
</style>

<script>
import index from './index';
export default index;
</script>
