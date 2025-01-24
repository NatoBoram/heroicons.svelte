<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import FunnelSvelte from '../../../lib/24/outline/funnel.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: FunnelSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Funnel" />
