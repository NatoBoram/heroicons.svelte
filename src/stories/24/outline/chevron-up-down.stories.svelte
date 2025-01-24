<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChevronUpDownSvelte from '../../../lib/24/outline/chevron-up-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ChevronUpDownSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ChevronUpDown" />
