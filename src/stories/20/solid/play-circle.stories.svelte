<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PlayCircleSvelte from '../../../lib/20/solid/play-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: PlayCircleSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="PlayCircle" />
