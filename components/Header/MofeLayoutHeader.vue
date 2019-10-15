<template>
    <ALayoutHeader class="flex justify-between items-center p-0">
        <AIcon class="trigger" :type="menuIcon" @click="collapse" />
        <AAvatar icon="user" class="avatar" />
    </ALayoutHeader>
</template>

<script>
export default {
    props: {
        drawerCollapsed: {
            type: Boolean,
            required: true
        }
    },
    computed: {
        menuIcon() {
            return this.syncedDrawerCollapsed ? 'menu-unfold' : 'menu-fold';
        },
        syncedDrawerCollapsed: {
            get() {
                return this.drawerCollapsed;
            },
            set(value) {
                this.$emit('update:drawerCollapsed', value);
            }
        }
    },
    methods: {
        collapse() {
            this.syncedDrawerCollapsed = !this.syncedDrawerCollapsed;
        }
    }
};
</script>

<style lang="less" scoped>
.trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    color: white;

    &:hover {
        color: #1da57a;
    }
}

.avatar {
    margin: 0 24px;
}
</style>
