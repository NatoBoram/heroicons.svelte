<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChevronLeftSvelte from '../../../lib/24/outline/chevron-left.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ChevronLeftSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ChevronLeft" />
