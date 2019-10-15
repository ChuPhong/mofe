<template>
    <ARow type="flex">
        <ACol :xs="24">
            <div class="text-2xl md:text-3xl capitalize mb-3">Tìm Kiếm</div>
        </ACol>
        <ACol :xs="24">
            <InputSearch :search="search" />
        </ACol>
        <ACol :xs="24">
            <AList>
                <AListItem v-for="song in songs" :key="song.id">
                    <AListItemMeta :description="[...song.artists].map((ar) => ar.name).join(', ')">
                        <NuxtLink slot="title" :to="`bai-hat/${slugify(song.name)}/${song.id}`">{{ song.name }}</NuxtLink>
                        <AAvatar slot="avatar" :size="74" :src="song.thumbnail" />
                    </AListItemMeta>
                </AListItem>
            </AList>
        </ACol>
    </ARow>
</template>

<script>
import InputSearch from '@/components/InputSearch';
import Song from '@/models/song';

export default {
    layout: 'mofe',
    components: {
        InputSearch
    },
    data() {
        return {
            songs: undefined
        };
    },
    methods: {
        async search(value) {
            const response = await Song.include('artists')
                .where('search', value)
                .get();
            this.songs = response.data.map((item) => item.song);
        }
    }
};
</script>

<style lang="less">
.mofe-list-item {
    border-bottom: 1px solid #e8e8e80f !important;
}
.mofe-list-item-meta {
    align-items: center;
}
</style>
