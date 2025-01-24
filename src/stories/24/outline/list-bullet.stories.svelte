<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ListBulletSvelte from '../../../lib/24/outline/list-bullet.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ListBulletSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ListBullet" />
