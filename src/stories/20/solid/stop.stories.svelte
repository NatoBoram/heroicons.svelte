<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import StopSvelte from '../../../lib/20/solid/stop.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: StopSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="Stop" />
