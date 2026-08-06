<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChevronUpSvelte from '../../../lib/16/solid/chevron-up.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ChevronUpSvelte,
		args: { class: '' },
	})
</script>

<Story name="ChevronUp" />
