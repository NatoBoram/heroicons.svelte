<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChevronDownSvelte from '../../../lib/24/solid/chevron-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ChevronDownSvelte,
		args: { class: '' },
	})
</script>

<Story name="ChevronDown" />
