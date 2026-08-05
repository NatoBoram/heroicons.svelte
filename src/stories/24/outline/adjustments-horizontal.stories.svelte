<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import AdjustmentsHorizontalSvelte from '../../../lib/24/outline/adjustments-horizontal.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: AdjustmentsHorizontalSvelte,
		args: { class: '' },
	})
</script>

<Story name="AdjustmentsHorizontal" />
