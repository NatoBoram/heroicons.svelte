<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChevronDoubleUpSvelte from '../../../lib/24/outline/chevron-double-up.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ChevronDoubleUpSvelte,
		args: { class: '' },
	})
</script>

<Story name="ChevronDoubleUp" />
