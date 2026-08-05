<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ListBulletSvelte from '../../../lib/16/solid/list-bullet.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ListBulletSvelte,
		args: { class: '' },
	})
</script>

<Story name="ListBullet" />
