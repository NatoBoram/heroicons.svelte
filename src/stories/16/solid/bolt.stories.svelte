<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BoltSvelte from '../../../lib/16/solid/bolt.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: BoltSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Bolt" />
