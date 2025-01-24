<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChevronDoubleRightSvelte from '../../../lib/24/solid/chevron-double-right.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ChevronDoubleRightSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ChevronDoubleRight" />
