<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PlayPauseSvelte from '../../../lib/16/solid/play-pause.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: PlayPauseSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="PlayPause" />
