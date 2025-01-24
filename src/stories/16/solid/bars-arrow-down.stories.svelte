<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BarsArrowDownSvelte from '../../../lib/16/solid/bars-arrow-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: BarsArrowDownSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="BarsArrowDown" />
