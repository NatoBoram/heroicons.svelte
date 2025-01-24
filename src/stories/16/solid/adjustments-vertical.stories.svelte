<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import AdjustmentsVerticalSvelte from '../../../lib/16/solid/adjustments-vertical.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: AdjustmentsVerticalSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="AdjustmentsVertical" />
