<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PlaySvelte from '../../../lib/16/solid/play.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: PlaySvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Play" />
