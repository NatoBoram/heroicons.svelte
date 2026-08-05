<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import StopSvelte from '../../../lib/16/solid/stop.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: StopSvelte,
		args: { class: '' },
	})
</script>

<Story name="Stop" />
