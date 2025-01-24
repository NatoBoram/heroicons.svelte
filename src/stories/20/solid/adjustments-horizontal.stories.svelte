<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import AdjustmentsHorizontalSvelte from '../../../lib/20/solid/adjustments-horizontal.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: AdjustmentsHorizontalSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="AdjustmentsHorizontal" />
