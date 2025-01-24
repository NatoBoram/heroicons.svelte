<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import FunnelSvelte from '../../../lib/16/solid/funnel.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: FunnelSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Funnel" />
