<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import HandThumbDownSvelte from '../../../lib/16/solid/hand-thumb-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: HandThumbDownSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="HandThumbDown" />
