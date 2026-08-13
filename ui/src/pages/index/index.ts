// Copyright (C) 2025 Template Author
//
// This file is part of miniapp-template.
//
// miniapp-template is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// miniapp-template is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with miniapp-template.  If not, see <https://www.gnu.org/licenses/>.

import { defineComponent } from 'vue';

export type indexOptions = {};

const STORAGE_KEY = 'miniapp-template-demo';

const index = defineComponent({
    data() {
        return {
            $page: {} as FalconPage<indexOptions>,
            count: 0,
            brightness: 50,
            autoSave: true,
            status: 'Ready.',
        };
    },

    methods: {
        increment() {
            this.count++;
            if (this.autoSave) {
                this.save();
            }
        },

        decrement() {
            if (this.count > 0) {
                this.count--;
                if (this.autoSave) {
                    this.save();
                }
            }
        },

        reset() {
            this.count = 0;
            this.brightness = 50;
            this.status = 'Reset done.';
        },

        onBrightnessChange(value: number) {
            this.brightness = value;
        },

        onAutoSaveChange(value: boolean) {
            this.autoSave = value;
            this.status = value ? 'Auto-save enabled.' : 'Auto-save disabled.';
        },

        async save() {
            try {
                const data = JSON.stringify({ count: this.count, brightness: this.brightness });
                await $falcon.jsapi.storage.setStorage({ key: STORAGE_KEY, data });
                this.status = 'Saved to device storage.';
            } catch (err) {
                this.status = 'Save failed: ' + err;
            }
        },

        async load() {
            try {
                const res = await $falcon.jsapi.storage.getStorage({ key: STORAGE_KEY });
                const parsed = JSON.parse(res.data);
                this.count = parsed.count ?? 0;
                this.brightness = parsed.brightness ?? 50;
                this.status = 'Loaded from device storage.';
            } catch (err) {
                this.status = 'Nothing stored yet.';
            }
        },

        /**
         * 页面生命周期：页面进入前台
         * 由 base-page.js 的 onShow() 代理调用
         */
        onShow() {
            this.load();
        },
    }
});

export default index;
