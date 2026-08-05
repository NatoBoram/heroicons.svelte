<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BarsArrowDownSvelte from '../../../lib/20/solid/bars-arrow-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: BarsArrowDownSvelte,
		args: { class: '' },
	})
</script>

<Story name="BarsArrowDown" />
