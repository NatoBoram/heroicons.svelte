<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import AdjustmentsVerticalSvelte from '../../../lib/20/solid/adjustments-vertical.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: AdjustmentsVerticalSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="AdjustmentsVertical" />
