<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChevronDoubleLeftSvelte from '../../../lib/16/solid/chevron-double-left.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ChevronDoubleLeftSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ChevronDoubleLeft" />
