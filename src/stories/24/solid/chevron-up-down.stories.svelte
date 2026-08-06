<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChevronUpDownSvelte from '../../../lib/24/solid/chevron-up-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ChevronUpDownSvelte,
		args: { class: '' },
	})
</script>

<Story name="ChevronUpDown" />
