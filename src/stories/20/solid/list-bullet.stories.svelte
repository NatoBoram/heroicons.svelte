<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ListBulletSvelte from '../../../lib/20/solid/list-bullet.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ListBulletSvelte,
		args: { class: '' },
	})
</script>

<Story name="ListBullet" />
