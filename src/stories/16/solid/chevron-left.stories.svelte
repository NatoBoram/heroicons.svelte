<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChevronLeftSvelte from '../../../lib/16/solid/chevron-left.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ChevronLeftSvelte,
		args: { class: '' },
	})
</script>

<Story name="ChevronLeft" />
