<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChevronLeftSvelte from '../../../lib/24/outline/chevron-left.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ChevronLeftSvelte,
		args: { class: '' },
	})
</script>

<Story name="ChevronLeft" />
