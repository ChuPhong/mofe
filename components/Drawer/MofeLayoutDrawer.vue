<template>
    <div>
        <ALayoutSider
            v-model="syncedCollapsed"
            :trigger="null"
            :width="width"
            :collapsed-width="collapsedWidth"
            :collapsible="collapsible"
            class="fixed overflow-auto left-0 z-1100 h-screen shadow-2xl"
            style="z-index: 9999;"
        >
            <div class="m-5 flex justify-center items-center">
                <img :src="logo" alt="MofE - Trang web nghe nhạc trực tuyến" class="h-14" />
            </div>
            <slot />
        </ALayoutSider>
        <div v-if="!syncedCollapsed && !$isDesktop()" class="sidenav-overlay" @click="hideDrawer"></div>
    </div>
</template>

<script>
export default {
    props: {
        width: {
            type: Number,
            default: () => 250
        },
        collapsed: {
            type: Boolean,
            required: true
        },
        collapsedWidth: {
            type: Number,
            default: () => 0
        },
        collapsible: {
            type: Boolean,
            default: () => true
        },
        logo: {
            type: String,
            required: true
        }
    },
    computed: {
        syncedCollapsed: {
            get() {
                return this.collapsed;
            },
            set(value) {
                this.$emit('update:collapsed', value);
            }
        }
    },
    mounted() {
        if (!this.$isDesktop()) {
            this.syncedCollapsed = true;
        }
    },
    methods: {
        hideDrawer() {
            this.syncedCollapsed = !this.syncedCollapsed;
        }
    }
};
</script>

<style scoped>
.sidenav-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    opacity: 1;
    height: 120vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 997;
}
</style>
