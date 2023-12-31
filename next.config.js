/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['i.postimg.cc'],
    },
    experimental:{
        serverActions:true,
    }
};
module.exports = nextConfig
