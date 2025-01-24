<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BarsArrowDownSvelte from '../../../lib/20/solid/bars-arrow-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: BarsArrowDownSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="BarsArrowDown" />
