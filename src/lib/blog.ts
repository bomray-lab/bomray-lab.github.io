import type { CollectionEntry } from 'astro:content';
import { getCollection } from 'astro:content';
import { getImage } from 'astro:assets';

const PUBLISH_TIMEZONE = 'Asia/Seoul';

/** YYYY-MM-DD in the site publish timezone (KST). */
export function toDateKey(date: Date, timeZone = PUBLISH_TIMEZONE): string {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);
}

/**
 * Publish when pubDate's calendar day (KST) is today or earlier.
 * In `astro dev`, all posts are shown so scheduled drafts are previewable.
 */
export function isPublished(pubDate: Date, now = new Date()): boolean {
  if (import.meta.env.DEV) return true;
  return toDateKey(pubDate) <= toDateKey(now);
}

export async function getPublishedPosts(): Promise<CollectionEntry<'blog'>[]> {
  return getCollection('blog', ({ data }) => isPublished(data.pubDate));
}

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
