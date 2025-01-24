<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChevronDoubleRightSvelte from '../../../lib/20/solid/chevron-double-right.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ChevronDoubleRightSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="ChevronDoubleRight" />
