<template>
    <ARow v-if="music" type="flex">
        <ACol :xs="24">
            <div class="text-center">
                <img :src="music.pic" :alt="[music.title, music.artist].join(' - ')" class="inline rounded-full spin max-width-240px" />
            </div>
        </ACol>
    </ARow>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'SongInfoPage',
    layout: 'mofe',
    validate({ params }) {
        return /^\d+$/.test(params.id);
    },
    computed: {
        ...mapGetters('Player', { music: 'getMusic' })
    },
    async fetch({ route, $axios, store }) {
        const playing = store.getters['Player/getMusic'];

        if (playing && playing.id === +route.params.id) return;

        const response = await $axios.get(`songs/${route.params.id}`);
        store.commit('Player/setMusic', response.data.data.song);
    }
};
</script>

<style>
.spin {
    animation: spin 10s linear infinite;
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>
