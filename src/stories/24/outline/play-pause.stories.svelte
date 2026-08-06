<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PlayPauseSvelte from '../../../lib/24/outline/play-pause.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: PlayPauseSvelte,
		args: { class: '' },
	})
</script>

<Story name="PlayPause" />
