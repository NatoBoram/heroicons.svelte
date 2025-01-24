<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChevronDoubleLeftSvelte from '../../../lib/20/solid/chevron-double-left.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ChevronDoubleLeftSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="ChevronDoubleLeft" />
