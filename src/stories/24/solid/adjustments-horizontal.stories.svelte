<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import AdjustmentsHorizontalSvelte from '../../../lib/24/solid/adjustments-horizontal.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: AdjustmentsHorizontalSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="AdjustmentsHorizontal" />
