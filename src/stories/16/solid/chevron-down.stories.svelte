<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChevronDownSvelte from '../../../lib/16/solid/chevron-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ChevronDownSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ChevronDown" />
