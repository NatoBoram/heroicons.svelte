<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import AdjustmentsHorizontalSvelte from '../../../lib/24/solid/adjustments-horizontal.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: AdjustmentsHorizontalSvelte,
		args: { class: '' },
	})
</script>

<Story name="AdjustmentsHorizontal" />
