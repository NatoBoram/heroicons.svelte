<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChevronDownSvelte from '../../../lib/24/outline/chevron-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ChevronDownSvelte,
		args: { class: '' },
	})
</script>

<Story name="ChevronDown" />
