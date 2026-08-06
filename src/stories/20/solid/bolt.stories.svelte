<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BoltSvelte from '../../../lib/20/solid/bolt.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: BoltSvelte,
		args: { class: '' },
	})
</script>

<Story name="Bolt" />
