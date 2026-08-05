<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChevronDoubleRightSvelte from '../../../lib/24/outline/chevron-double-right.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ChevronDoubleRightSvelte,
		args: { class: '' },
	})
</script>

<Story name="ChevronDoubleRight" />
