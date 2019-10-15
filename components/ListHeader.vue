<template>
    <ARow type="flex">
        <ACol :xs="24" class="flex justify-between items-center mb-2">
            <div class="text-2xl md:text-3xl capitalize">{{ text }}</div>
            <slot name="left">
                <NuxtLink v-if="showSeeMore" :to="link" class="text-gray-600 hover:text-green">{{ seeMore }}</NuxtLink>
            </slot>
        </ACol>
    </ARow>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        },
        showSeeMore: {
            type: Boolean,
            default: () => true
        },
        seeMore: {
            type: String,
            default: () => 'Xem thêm'
        },
        link: {
            type: [Object, String],
            required: true
        }
    }
};
</script>
