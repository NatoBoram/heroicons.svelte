<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BellSvelte from '../../../lib/24/solid/bell.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: BellSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Bell" />
