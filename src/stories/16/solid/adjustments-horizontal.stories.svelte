<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import AdjustmentsHorizontalSvelte from '../../../lib/16/solid/adjustments-horizontal.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: AdjustmentsHorizontalSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="AdjustmentsHorizontal" />
