<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PauseCircleSvelte from '../../../lib/24/solid/pause-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: PauseCircleSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="PauseCircle" />
