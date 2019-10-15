export const namespaced = true;

export const state = () => ({
    items: [
        { key: 'index', icon: 'pie-chart', to: '/', text: 'Trang Chủ' },
        { key: 'search', icon: 'search', to: '/tim-kiem', text: 'Tìm Kiếm' },
        {
            key: 'artists',
            title: {
                icon: 'project',
                text: 'Ca sĩ'
            },
            children: [
                { key: 'artists-all', to: '/artists', text: 'Danh sách' },
                { key: 'artists-store', to: '/artists/create', text: 'Thêm ca sĩ' }
            ]
        }
    ]
});

export const getters = {
    getMenuItems: (state) => state.items
};
