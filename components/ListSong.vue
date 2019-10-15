<template>
    <ARow :gutter="12">
        <ACol v-for="song in items" :key="song.id" :xs="xs" :sm="sm" :md="md" :lg="lg" :xl="xl" :xxl="xxl" class="my-2">
            <NuxtLink :to="song.webLink">
                <CardSong :song="song" :show-info="showInfo" />
            </NuxtLink>
        </ACol>
    </ARow>
</template>

<script>
import CardSong from '@/components/CardSong';

export default {
    components: {
        CardSong
    },
    props: {
        gutter: {
            type: Number,
            default: () => 12
        },
        items: {
            type: Array,
            required: true
        },
        xs: {
            type: Number,
            default: () => 12
        },
        sm: {
            type: Number,
            default: () => 6
        },
        md: {
            type: Number,
            default: () => undefined
        },
        lg: {
            type: Number,
            default: () => 3
        },
        xl: {
            type: Number,
            default: () => undefined
        },
        xxl: {
            type: Number,
            default: () => undefined
        },
        showInfo: {
            type: Boolean,
            default: () => false
        }
    }
};
</script>
