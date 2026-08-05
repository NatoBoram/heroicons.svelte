<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PlaySvelte from '../../../lib/24/outline/play.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: PlaySvelte,
		args: { class: '' },
	})
</script>

<Story name="Play" />
