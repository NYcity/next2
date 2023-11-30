/** @type {import('next').NextConfig} */
const nextConfig = {
    api: {
        externalResolver: true,
    },
    output: 'export',
}

module.exports = nextConfig
