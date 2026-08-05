<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BarsArrowDownSvelte from '../../../lib/16/solid/bars-arrow-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: BarsArrowDownSvelte,
		args: { class: '' },
	})
</script>

<Story name="BarsArrowDown" />
