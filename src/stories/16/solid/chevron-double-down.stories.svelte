<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChevronDoubleDownSvelte from '../../../lib/16/solid/chevron-double-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ChevronDoubleDownSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ChevronDoubleDown" />
