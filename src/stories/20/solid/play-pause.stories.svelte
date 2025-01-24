<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PlayPauseSvelte from '../../../lib/20/solid/play-pause.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: PlayPauseSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="PlayPause" />
