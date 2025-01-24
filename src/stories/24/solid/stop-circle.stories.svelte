<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import StopCircleSvelte from '../../../lib/24/solid/stop-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: StopCircleSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="StopCircle" />
