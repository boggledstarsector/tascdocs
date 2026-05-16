import type { MetadataRoute } from 'next';
import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';

export const dynamic = 'force-static';

const SITE_URL = 'https://boggledtasc.com';

type RouteInfo = {
  urlPath: string;
  mtime: Date;
};

async function findRoutes(appDir: string): Promise<RouteInfo[]> {
  const routes: RouteInfo[] = [];

  async function walk(dir: string, segments: string[]): Promise<void> {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isDirectory()) {
        if (entry.name.startsWith('_') || entry.name.startsWith('(')) continue;
        await walk(path.join(dir, entry.name), [...segments, entry.name]);
      } else if (entry.isFile() && entry.name === 'page.tsx') {
        const filePath = path.join(dir, entry.name);
        const { mtime } = await stat(filePath);
        const urlPath = segments.length === 0 ? '/' : '/' + segments.join('/');
        routes.push({ urlPath, mtime });
      }
    }
  }

  await walk(appDir, []);
  return routes;
}

type Classification = {
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
};

function classify(urlPath: string): Classification {
  if (urlPath === '/') return { priority: 1.0, changeFrequency: 'monthly' };
  if (urlPath === '/docs' || urlPath === '/docs/terraforming') {
    return { priority: 0.9, changeFrequency: 'monthly' };
  }
  if (
    urlPath === '/about-us' ||
    urlPath === '/contact-us' ||
    urlPath === '/privacy-policy' ||
    urlPath === '/terms-and-conditions'
  ) {
    return { priority: 0.3, changeFrequency: 'yearly' };
  }
  return { priority: 0.7, changeFrequency: 'monthly' };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const appDir = path.join(process.cwd(), 'app');
  const routes = await findRoutes(appDir);

  routes.sort((a, b) => {
    if (a.urlPath === '/') return -1;
    if (b.urlPath === '/') return 1;
    return a.urlPath.localeCompare(b.urlPath);
  });

  return routes.map((r) => {
    const { priority, changeFrequency } = classify(r.urlPath);
    return {
      url: SITE_URL + (r.urlPath === '/' ? '' : r.urlPath),
      lastModified: r.mtime,
      changeFrequency,
      priority,
    };
  });
}
