<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import HandThumbDownSvelte from '../../../lib/20/solid/hand-thumb-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: HandThumbDownSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="HandThumbDown" />
