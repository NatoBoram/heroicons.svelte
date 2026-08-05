<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChevronDoubleRightSvelte from '../../../lib/16/solid/chevron-double-right.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ChevronDoubleRightSvelte,
		args: { class: '' },
	})
</script>

<Story name="ChevronDoubleRight" />
