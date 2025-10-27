const isGH = process.env.GITHUB_PAGES === 'true';
const repo = process.env.REPO_NAME || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: isGH && repo ? `/${repo}` : undefined,
  assetPrefix: isGH && repo ? `/${repo}/` : undefined,
};
export default nextConfig;
