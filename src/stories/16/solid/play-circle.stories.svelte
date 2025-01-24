<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PlayCircleSvelte from '../../../lib/16/solid/play-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: PlayCircleSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="PlayCircle" />
