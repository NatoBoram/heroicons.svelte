<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import AdjustmentsVerticalSvelte from '../../../lib/16/solid/adjustments-vertical.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: AdjustmentsVerticalSvelte,
		args: { class: '' },
	})
</script>

<Story name="AdjustmentsVertical" />
