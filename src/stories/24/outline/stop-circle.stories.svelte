<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import StopCircleSvelte from '../../../lib/24/outline/stop-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: StopCircleSvelte,
		args: { class: '' },
	})
</script>

<Story name="StopCircle" />
