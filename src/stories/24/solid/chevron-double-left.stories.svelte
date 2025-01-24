<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChevronDoubleLeftSvelte from '../../../lib/24/solid/chevron-double-left.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ChevronDoubleLeftSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ChevronDoubleLeft" />
