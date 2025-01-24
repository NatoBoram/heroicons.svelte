<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChevronUpDownSvelte from '../../../lib/16/solid/chevron-up-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ChevronUpDownSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ChevronUpDown" />
