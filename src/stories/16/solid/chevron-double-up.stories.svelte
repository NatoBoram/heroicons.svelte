<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChevronDoubleUpSvelte from '../../../lib/16/solid/chevron-double-up.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ChevronDoubleUpSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ChevronDoubleUp" />
