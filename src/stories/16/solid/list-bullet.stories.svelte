<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ListBulletSvelte from '../../../lib/16/solid/list-bullet.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ListBulletSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ListBullet" />
