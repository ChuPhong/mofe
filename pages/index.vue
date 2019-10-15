<template>
    <div>
        <ListHeader text="Bảng xếp hạng" :link="{ name: 'bai-hat-bang-xep-hang' }" />
        <ListSong :items="getTopSongs" class="mb-6" />

        <ListHeader text="Bài hát mới" :link="{ name: 'bai-hat-moi-ra-mat' }" />
        <ListSong :items="getNewSongs" show-info class="mb-6" />

        <ListHeader text="Hôm nay nghe gì" link="/bai-hat/hom-nay-nghe-gi">
            <div slot="left">
                <div class="text-gray-600 hover:text-green cursor-pointer" @click="() => $store.dispatch('Song/fetchRandomSong')">
                    Làm mới
                </div>
            </div>
        </ListHeader>
        <ListSong :items="getRandomSong" show-info class="mb-6" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ListHeader from '@/components/ListHeader';
import ListSong from '@/components/ListSong';

export default {
    name: 'HomePage',
    layout: 'mofe',
    components: {
        ListHeader,
        ListSong
    },
    computed: {
        ...mapGetters('Song', ['getTopSongs', 'getNewSongs', 'getRandomSong'])
    },
    fetch({ store, $axios }) {
        store.dispatch('Song/fetchTopSongs');
        store.dispatch('Song/fetchNewSongs');
        store.dispatch('Song/fetchRandomSong');
    }
};
</script>
