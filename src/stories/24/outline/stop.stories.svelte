<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import StopSvelte from '../../../lib/24/outline/stop.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: StopSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Stop" />
