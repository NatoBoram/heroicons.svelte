<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChevronRightSvelte from '../../../lib/24/outline/chevron-right.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ChevronRightSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ChevronRight" />
