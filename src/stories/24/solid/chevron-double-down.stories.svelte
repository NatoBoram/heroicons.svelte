<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChevronDoubleDownSvelte from '../../../lib/24/solid/chevron-double-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ChevronDoubleDownSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ChevronDoubleDown" />
