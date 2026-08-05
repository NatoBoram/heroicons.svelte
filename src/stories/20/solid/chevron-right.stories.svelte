<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChevronRightSvelte from '../../../lib/20/solid/chevron-right.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ChevronRightSvelte,
		args: { class: '' },
	})
</script>

<Story name="ChevronRight" />
