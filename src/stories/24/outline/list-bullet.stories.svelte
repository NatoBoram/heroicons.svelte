<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ListBulletSvelte from '../../../lib/24/outline/list-bullet.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ListBulletSvelte,
		args: { class: '' },
	})
</script>

<Story name="ListBullet" />
