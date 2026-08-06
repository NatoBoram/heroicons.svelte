<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChevronRightSvelte from '../../../lib/24/solid/chevron-right.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ChevronRightSvelte,
		args: { class: '' },
	})
</script>

<Story name="ChevronRight" />
