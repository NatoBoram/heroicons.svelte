<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChevronDoubleUpSvelte from '../../../lib/20/solid/chevron-double-up.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ChevronDoubleUpSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="ChevronDoubleUp" />
