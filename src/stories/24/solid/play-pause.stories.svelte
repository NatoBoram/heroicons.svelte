<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PlayPauseSvelte from '../../../lib/24/solid/play-pause.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: PlayPauseSvelte,
		args: { class: '' },
	})
</script>

<Story name="PlayPause" />
