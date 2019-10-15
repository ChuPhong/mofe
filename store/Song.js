import pickBy from 'lodash/pickby';
import isString from 'lodash/isstring';
import isNumber from 'lodash/isnumber';
import Song from '@/models/song';
import { slugify } from '@/plugins/slugify';

export const namespaced = true;

export const types = {
    SET_TOP_SONGS: 'setTopSongs',
    SET_NEW_SONGS: 'setNewSongs',
    SET_RANDOM_SONG: 'setRandomSong'
};

export const state = () => ({
    topSongs: [],
    newSongs: [],
    randomSong: []
});

export const mutations = {
    [types.SET_TOP_SONGS](state, songs) {
        state.topSongs = songs;
    },
    [types.SET_NEW_SONGS](state, songs) {
        state.newSongs = songs;
    },
    [types.SET_RANDOM_SONG](state, songs) {
        state.randomSong = songs;
    }
};

const remapList = (item) => {
    return item.map((item) => {
        const artists = item.song.artists && item.song.artists.map((artist) => artist.name);

        const validateObject = (value) => isNumber(value) || isString(value) || (Array.isArray(value) && value.length !== 0);

        return pickBy(
            {
                ...item.song,
                artists,
                webLink: `/bai-hat/${slugify(item.song.name)}/${item.song.id}`
            },
            validateObject
        );
    });
};

export const getters = {
    getTopSongs: ({ topSongs }) => remapList(topSongs),
    getNewSongs: ({ newSongs }) => remapList(newSongs),
    getRandomSong: ({ randomSong }) => remapList(randomSong)
};

export const actions = {
    async fetchTopSongs({ commit }, limit = 8) {
        const topSongs = await Song.select('id', 'name', 'thumbnail')
            .orderBy('-views')
            .limit(limit)
            .get();

        commit(types.SET_TOP_SONGS, topSongs.data);
    },

    async fetchNewSongs({ commit }) {
        const newSongs = await Song.select({
            songs: ['id', 'name', 'thumbnail'],
            artists: ['artists.name']
        })
            .include('artists')
            .orderBy('-created_at', '-updated_at')
            .limit(8)
            .get();

        commit(types.SET_NEW_SONGS, newSongs.data);
    },

    async fetchRandomSong({ commit }, limit = 8) {
        const randomSong = await Song.select({
            songs: ['id', 'name', 'thumbnail'],
            artists: ['artists.name']
        })
            .include('artists')
            .params({
                random: true
            })
            .limit(limit)
            .get();

        commit(types.SET_RANDOM_SONG, randomSong.data);
    }
};
