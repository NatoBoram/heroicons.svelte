<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import AdjustmentsHorizontalSvelte from '../../../lib/20/solid/adjustments-horizontal.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: AdjustmentsHorizontalSvelte,
		args: { class: '' },
	})
</script>

<Story name="AdjustmentsHorizontal" />
