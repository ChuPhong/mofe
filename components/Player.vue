<template>
    <APlayer class="bg-black text-white" :music="music" theme="#1da57a" preload="auto" :volume="1" @play="play" @pause="pause" />
</template>

<script>
import APlayer from 'vue-aplayer';
APlayer.disableVersionBadge = true;

export default {
    components: {
        APlayer
    },
    props: {
        music: {
            type: Object,
            required: true
        }
    },
    methods: {
        play(event) {
            this.$emit('play', event);
        },
        pause(event) {
            this.$emit('pause', event);
        }
    }
};
</script>
