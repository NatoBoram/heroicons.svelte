<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BarsArrowUpSvelte from '../../../lib/24/outline/bars-arrow-up.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: BarsArrowUpSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="BarsArrowUp" />
