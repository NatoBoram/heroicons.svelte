<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChevronDoubleDownSvelte from '../../../lib/20/solid/chevron-double-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ChevronDoubleDownSvelte,
		args: { class: '' },
	})
</script>

<Story name="ChevronDoubleDown" />
