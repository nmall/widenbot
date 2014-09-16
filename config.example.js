module.exports = {
    name: 'widenbot',
    icon: ':ghost:',

    env: 'dev',
    repl: false,

    port: 8000,

    token: process.env.SLACK_TOKEN,
    url: process.env.SLACK_URL,

    brain: {
        dbpath: './db'
    },

    logging: {
        console: true,
        path: './log'
    },

    plugins: {
        'echo': {},
        'gif': {
            GIPHY_API_KEY: process.env.GIPHY_API_KEY
        },
        'coolface': {},
        'flipit': {},
        'coolface': {},
        'nowplaying': {
            'api_key': process.env.LASTFM_API_KEY,
            'secret': process.env.LASTFM_SECRET
        },
        'last.fm': {
            'api_key': process.env.LASTFM_API_KEY,
            'secret': process.env.LASTFM_SECRET
        }

        //'foo': {}
    }
};
