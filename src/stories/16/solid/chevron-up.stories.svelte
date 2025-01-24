<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChevronUpSvelte from '../../../lib/16/solid/chevron-up.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ChevronUpSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ChevronUp" />
