<template>
    <Fragment>
        <div class="text-lg lg:text-3xl text-center">Đang trong giai đoạn phát triển</div>
        <NuxtLink to="/" class="text-base mt-2 text-center block">Quay về trang chủ</NuxtLink>
    </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment';

export default {
    layout: 'mofe',
    components: {
        Fragment
    }
};
</script>
