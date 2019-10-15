<template>
    <AMenu theme="dark" mode="inline" :default-selected-keys="[$route.name]">
        <template v-for="item in items">
            <AMenuItem v-if="item.text" :key="item.key">
                <NuxtLink :to="item.to">
                    <AIcon :type="item.icon" />
                    <span>{{ item.text }}</span>
                </NuxtLink>
            </AMenuItem>
            <ASubMenu v-if="item.title" :key="item.key">
                <span slot="title">
                    <AIcon :type="item.title.icon" />
                    <span>{{ item.title.text }}</span>
                </span>
                <AMenuItem v-for="child in item.children" :key="child.key">
                    <NuxtLink :to="child.to">{{ child.text }}</NuxtLink>
                </AMenuItem>
            </ASubMenu>
        </template>
    </AMenu>
</template>

<script lang="jsx">
export default {
    props: {
        items: {
            type: Array,
            required: true
        }
    }
};
</script>

<style scoped>
.anticon {
    vertical-align: 3px;
}
</style>
