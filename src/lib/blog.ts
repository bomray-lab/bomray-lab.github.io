import type { CollectionEntry } from 'astro:content';
import { getImage } from 'astro:assets';

export function getPostSlug(post: CollectionEntry<'blog'>): string {
  if (post.data.slug) return post.data.slug;
  return post.id.replace(/\/index$/, '');
}

export function toAbsoluteUrl(pathOrUrl: string, site: URL | undefined): string {
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  if (!site) return pathOrUrl;
  return new URL(pathOrUrl, site).href;
}

export function postPath(slug: string): string {
  return `/blog/${slug}/`;
}

type ImageInput = NonNullable<CollectionEntry<'blog'>['data']['hero']>;

export async function resolveOgImageUrl(
  image: ImageInput | undefined,
  site: URL | undefined,
): Promise<string | undefined> {
  if (!image) return undefined;
  const optimized = await getImage({ src: image, width: 1200 });
  return toAbsoluteUrl(optimized.src, site);
}
