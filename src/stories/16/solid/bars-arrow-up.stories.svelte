<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BarsArrowUpSvelte from '../../../lib/16/solid/bars-arrow-up.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: BarsArrowUpSvelte,
		args: { class: '' },
	})
</script>

<Story name="BarsArrowUp" />
