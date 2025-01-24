<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BarsArrowUpSvelte from '../../../lib/20/solid/bars-arrow-up.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: BarsArrowUpSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="BarsArrowUp" />
