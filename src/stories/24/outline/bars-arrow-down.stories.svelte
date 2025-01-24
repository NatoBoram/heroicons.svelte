<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BarsArrowDownSvelte from '../../../lib/24/outline/bars-arrow-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: BarsArrowDownSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="BarsArrowDown" />
