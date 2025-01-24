<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChevronUpSvelte from '../../../lib/20/solid/chevron-up.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ChevronUpSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="ChevronUp" />
