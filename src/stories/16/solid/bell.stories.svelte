<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BellSvelte from '../../../lib/16/solid/bell.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: BellSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Bell" />
