/** @type {import('next').NextConfig} */
module.exports = {
    images: {
        domains: ['randomuser.me', 'localhost'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.ctfassets.net',
                pathname: '/**',
            },
        ],
    },
};
