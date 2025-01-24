<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChevronUpDownSvelte from '../../../lib/20/solid/chevron-up-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ChevronUpDownSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="ChevronUpDown" />
