<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChevronLeftSvelte from '../../../lib/24/solid/chevron-left.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ChevronLeftSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ChevronLeft" />
