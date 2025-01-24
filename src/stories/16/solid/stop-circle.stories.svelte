<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import StopCircleSvelte from '../../../lib/16/solid/stop-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: StopCircleSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="StopCircle" />
