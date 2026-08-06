<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import FunnelSvelte from '../../../lib/16/solid/funnel.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: FunnelSvelte,
		args: { class: '' },
	})
</script>

<Story name="Funnel" />
