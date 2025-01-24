<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PlaySvelte from '../../../lib/24/outline/play.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: PlaySvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Play" />
