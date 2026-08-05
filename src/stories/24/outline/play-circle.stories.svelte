<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PlayCircleSvelte from '../../../lib/24/outline/play-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: PlayCircleSvelte,
		args: { class: '' },
	})
</script>

<Story name="PlayCircle" />
