<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BarsArrowUpSvelte from '../../../lib/24/solid/bars-arrow-up.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: BarsArrowUpSvelte,
		args: { class: '' },
	})
</script>

<Story name="BarsArrowUp" />
