<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import FunnelSvelte from '../../../lib/24/solid/funnel.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: FunnelSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Funnel" />
