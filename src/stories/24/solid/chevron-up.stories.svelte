<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChevronUpSvelte from '../../../lib/24/solid/chevron-up.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ChevronUpSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ChevronUp" />
