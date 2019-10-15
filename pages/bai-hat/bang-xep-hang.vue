<template>
    <div>
        <ListHeader text="Bảng xếp hạng" link="/bai-hat/bang-xep-hang" />
        <ListSong :items="getTopSongs" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ListHeader from '@/components/ListHeader';
import ListSong from '@/components/ListSong';

export default {
    name: 'TopSong',
    layout: 'mofe',
    components: {
        ListHeader,
        ListSong
    },
    computed: {
        ...mapGetters('Song', ['getTopSongs'])
    },
    fetch({ store }) {
        store.dispatch('Song/fetchTopSongs', 10);
    }
};
</script>
