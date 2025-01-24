<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BoltSvelte from '../../../lib/24/outline/bolt.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: BoltSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Bolt" />
