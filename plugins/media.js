import Vue from 'vue';

Vue.mixin({
    methods: {
        $isMobile() {
            const { $mq } = this;
            return $mq === 'xs' || $mq === 'sm';
        },
        $isTablet() {
            return this.$mq === 'md';
        },
        $isDesktop() {
            return !this.$isMobile() && !this.$isTablet();
        }
    }
});
