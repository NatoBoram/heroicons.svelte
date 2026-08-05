<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChevronDoubleLeftSvelte from '../../../lib/24/outline/chevron-double-left.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ChevronDoubleLeftSvelte,
		args: { class: '' },
	})
</script>

<Story name="ChevronDoubleLeft" />
