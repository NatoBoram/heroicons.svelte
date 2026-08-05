<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import HandThumbDownSvelte from '../../../lib/24/outline/hand-thumb-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: HandThumbDownSvelte,
		args: { class: '' },
	})
</script>

<Story name="HandThumbDown" />
