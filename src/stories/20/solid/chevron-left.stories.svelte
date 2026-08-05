<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChevronLeftSvelte from '../../../lib/20/solid/chevron-left.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ChevronLeftSvelte,
		args: { class: '' },
	})
</script>

<Story name="ChevronLeft" />
