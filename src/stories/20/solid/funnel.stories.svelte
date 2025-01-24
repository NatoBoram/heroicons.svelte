<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import FunnelSvelte from '../../../lib/20/solid/funnel.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: FunnelSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="Funnel" />
