<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import StopSvelte from '../../../lib/20/solid/stop.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: StopSvelte,
		args: { class: '' },
	})
</script>

<Story name="Stop" />
