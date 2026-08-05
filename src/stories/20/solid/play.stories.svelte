<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PlaySvelte from '../../../lib/20/solid/play.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: PlaySvelte,
		args: { class: '' },
	})
</script>

<Story name="Play" />
