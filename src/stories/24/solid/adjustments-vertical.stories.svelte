<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import AdjustmentsVerticalSvelte from '../../../lib/24/solid/adjustments-vertical.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: AdjustmentsVerticalSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="AdjustmentsVertical" />
