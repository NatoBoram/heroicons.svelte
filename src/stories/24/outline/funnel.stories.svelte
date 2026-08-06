<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import FunnelSvelte from '../../../lib/24/outline/funnel.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: FunnelSvelte,
		args: { class: '' },
	})
</script>

<Story name="Funnel" />
