<template>
    <ALocaleProvider :locale="viVN">
        <AConfigProvider prefix-cls="mofe">
            <ALayout>
                <MofeLayoutDrawer :collapsed.sync="collapsed" :logo="require('~/assets/images/logo_large.png')">
                    <MofeLayoutDrawerMenu :items="menuItems" />
                </MofeLayoutDrawer>
                <ALayout
                    class="flex flex-col min-h-screen bg-black overflow-visible max-w-full"
                    :style="{
                        marginLeft: !collapsed && $isDesktop() ? '250px' : 0,
                        transition: 'margin-left 0.2s',
                        willChange: 'margin-left'
                    }"
                >
                    <MofeLayoutHeader :drawer-collapsed.sync="collapsed" class="sticky top-0 z-10" />
                    <ALayoutContent class="px-5">
                        <!-- <div> -->
                        <nuxt />
                        <!-- </div> -->
                    </ALayoutContent>
                    <MofeLayoutFooter v-if="music">
                        <Player :music="music" @play="() => upView()" @pause="() => setPlaying(false)" />
                    </MofeLayoutFooter>
                </ALayout>
            </ALayout>
        </AConfigProvider>
    </ALocaleProvider>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import viVN from 'ant-design-vue/lib/locale-provider/vi_VN';
import MofeLayoutHeader from '@/components/Header/MofeLayoutHeader';
import MofeLayoutDrawer from '@/components/Drawer/MofeLayoutDrawer';
import MofeLayoutDrawerMenu from '@/components/Drawer/MofeLayoutDrawerMenu';
import MofeLayoutFooter from '@/components/Footer/MofeLayoutFooter';
import Player from '@/components/Player';

export default {
    name: 'LayoutMofe',
    components: {
        MofeLayoutHeader,
        MofeLayoutDrawer,
        MofeLayoutDrawerMenu,
        MofeLayoutFooter,
        Player
    },
    data() {
        return {
            collapsed: false,
            viVN
        };
    },
    computed: {
        ...mapGetters('MenuDrawer', {
            menuItems: 'getMenuItems'
        }),
        ...mapGetters('Player', { music: 'getMusic' })
    },
    methods: {
        ...mapMutations('Player', ['setPlaying']),
        ...mapActions('Player', ['upView'])
    }
};
</script>

<style>
::-webkit-scrollbar {
    display: none;
}
</style>
