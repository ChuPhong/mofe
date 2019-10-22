import path from 'path';

export default {
    mode: 'spa',
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || ''
            }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: ['~/assets/css/tailwind.css'],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: ['@/plugins/antd-ui', '@/plugins/media', '@/plugins/vue-api-query', '@/plugins/slugify'],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module'
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/auth',
        [
            'nuxt-mq',
            {
                defaultBreakpoint: 'xs',
                breakpoints: {
                    xs: 480,
                    sm: 576,
                    md: 768,
                    lg: 992,
                    xl: 1200,
                    xxl: Infinity
                }
            }
        ]
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {
        baseURL: 'http://api.mofe.com/api/v1'
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {},
        babel: {
            plugins: [
                [
                    'import',
                    {
                        libraryName: 'ant-design-vue',
                        libraryDirectory: 'es',
                        style: true
                    }
                ]
            ]
        },
        loaders: {
            less: {
                modifyVars: {
                    'ant-prefix': 'mofe',
                    'text-color-secondary': 'white',
                    'primary-color': '#1DA57A',
                    'body-background': '#13181d',
                    'link-color': '#1DA57A',
                    'border-radius-base': '0',
                    'layout-header-background': '@body-background',
                    'menu-dark-submenu-bg': '#0b1015',
                    'heading-color': 'white',
                    'text-color': 'white',
                    'card-radius': '@border-radius-base',
                    'card-background': '@body-background',
                    'input-bg': '@body-background'
                },
                javascriptEnabled: true
            }
        },
        postcss: {
            plugins: {
                tailwindcss: path.resolve(__dirname, './tailwind.config.js')
            }
        }
    },
    auth: {
        strategies: {
            password_grant: {
                _scheme: 'local',
                _name: 'laravel.password',
                endpoints: {
                    login: {
                        url: 'auth/login',
                        method: 'post',
                        propertyName: 'access_token'
                    },
                    logout: false,
                    user: {
                        url: 'auth/me',
                        propertyName: 'data.user'
                    }
                }
            }
        },
        watchLoggedIn: true
    }
};
