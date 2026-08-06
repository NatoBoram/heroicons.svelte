<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import AdjustmentsVerticalSvelte from '../../../lib/24/outline/adjustments-vertical.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: AdjustmentsVerticalSvelte,
		args: { class: '' },
	})
</script>

<Story name="AdjustmentsVertical" />
