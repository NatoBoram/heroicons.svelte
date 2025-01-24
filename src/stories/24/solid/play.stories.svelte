<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PlaySvelte from '../../../lib/24/solid/play.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: PlaySvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Play" />
