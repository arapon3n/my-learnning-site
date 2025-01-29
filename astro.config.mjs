// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Web Dev Roadmap',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'ホーム',
					items: [{ label: 'ホーム', slug: 'index' }],
				},
				{
					label: '環境構築',
					items: [{ label: 'はじめに', slug: 'environment-building' }]
				},
				{
					label: 'Unix コマンド',
					items: [
						{ label: 'Unix コマンド入門', slug: 'unix-training' },
						{ label: '基本的な Unix コマンド', slug: 'unix-training/basic' },
						{ label: '応用的な Unix コマンド', slug: 'unix-training/advanced' },
					],
				},
				{
					label: 'Git',
					items: [
						{ label: 'Git 入門', slug: 'git-training' },
					],
				},
			],
		}),
	],
	vite: {
    assetsInclude: ['**/*.png'] // PNG を Astro に認識させる
  }
});
