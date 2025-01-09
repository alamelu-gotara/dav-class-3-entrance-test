/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === 'development';

const nextConfig = {
    output: isDev ? 'standalone' : 'export',
    basePath: isDev ? '' : '/dav-class-3-entrance-test',
    assetPrefix: isDev ? '' : '/dav-class-3-entrance-test',
};

export default nextConfig;
