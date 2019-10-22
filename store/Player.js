import isEmpty from 'lodash/isEmpty';

export const namespaced = true;

export const types = {
    SET_PLAYING: 'setPlaying',
    SET_MUSIC: 'setMusic'
};

export const state = () => ({
    playing: false,
    music: undefined
});

export const mutations = {
    [types.SET_PLAYING](state, value) {
        state.playing = !!value;
    },
    [types.SET_MUSIC](state, music) {
        state.music = music;
    }
};

export const getters = {
    isPlaying: ({ playing }) => !!playing,
    getMusic: ({ music }) => {
        if (isEmpty(music)) return undefined;

        const { id, name, artists, thumbnail, url } = music;

        return {
            id,
            title: name,
            artist: artists && artists.map((artist) => artist.name).join(', '),
            src: url,
            pic: thumbnail
        };
    }
};

export const actions = {
    async upView({ state }) {
        const { id, views } = state.music;
        const response = await this.$axios.patch(`songs/${id}`, {
            views: views + 1
        });
        return response;
    }
};
