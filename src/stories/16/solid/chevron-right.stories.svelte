<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChevronRightSvelte from '../../../lib/16/solid/chevron-right.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ChevronRightSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ChevronRight" />
