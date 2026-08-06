<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import HandThumbDownSvelte from '../../../lib/16/solid/hand-thumb-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: HandThumbDownSvelte,
		args: { class: '' },
	})
</script>

<Story name="HandThumbDown" />
