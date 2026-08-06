<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChevronDoubleDownSvelte from '../../../lib/24/outline/chevron-double-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ChevronDoubleDownSvelte,
		args: { class: '' },
	})
</script>

<Story name="ChevronDoubleDown" />
