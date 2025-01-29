import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

/**
 * Starlight のドキュメントコレクションの定義
 * この定義がないとコンテンツのロードエラーが発生する可能性あり
 */
export const collections = {
	'docs': defineCollection({ loader: docsLoader(), schema: docsSchema() }),
	'unix-training': defineCollection({ loader: docsLoader(), schema: docsSchema() }),
	'git-training': defineCollection({ loader: docsLoader(), schema: docsSchema() }),
};
