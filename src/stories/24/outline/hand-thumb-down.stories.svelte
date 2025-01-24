<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import HandThumbDownSvelte from '../../../lib/24/outline/hand-thumb-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: HandThumbDownSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="HandThumbDown" />
