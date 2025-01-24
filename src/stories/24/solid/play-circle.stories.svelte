<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PlayCircleSvelte from '../../../lib/24/solid/play-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: PlayCircleSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="PlayCircle" />
