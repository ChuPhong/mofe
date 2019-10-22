<template>
    <div>
        <ACard hoverable class="bg-black border-none">
            <img slot="cover" :src="song.thumbnail" :alt="song.name" class="w-full h-auto rounded-none" />
        </ACard>
        <div v-if="showInfo" class="description">
            <div class="text-white text-base mt-2 truncate">{{ song.name }}</div>
            <div class="artits">
                <template v-for="(artist, index) in song.artists">
                    <NuxtLink
                        :key="artist + new Date().getUTCMilliseconds()"
                        :to="`/nghe-si/${slugify(artist)}`"
                        class="text-gray-600 hover:text-green"
                        >{{ artist }}</NuxtLink
                    ><span :key="index + new Date().getUTCMilliseconds()" class="text-gray-600">{{
                        index !== song.artists.length - 1 ? ', ' : null
                    }}</span>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        song: {
            type: Object,
            required: true
        },
        showInfo: {
            type: Boolean,
            default: () => false
        }
    }
};
</script>

<style lang="less">
.mofe-card-cover img {
    transition: transform 0.5s;
}

.mofe-card-hoverable {
    overflow: hidden;

    &:hover {
        img {
            transform: scale(1.5);
        }
    }
}
</style>
