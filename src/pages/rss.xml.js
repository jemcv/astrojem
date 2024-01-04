import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const writes = await getCollection('writes');
    const notes = await getCollection('notes');

    const allItems = [
        ...writes
        .map(post => ({ ...post, type: 'writes' })),
        ...notes
        .map(post => ({ ...post, type: 'notes' }))
    ];

    return rss({
        title: 'jem',
        description: 'memento mori',
        site: context.site,
        items: allItems
        .filter((post) => post.data.draft !== true)
        .map((post) => ({
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        // customData: post.data.customData,
        // Compute RSS link from post `slug`
        // This example assumes all posts are rendered as `/blog/[slug]` routes
        link: `/${post.type}/${post.slug}/`,
        })),
    });  
}
