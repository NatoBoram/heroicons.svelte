<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowPathRoundedSquareSvelte from '../../../lib/24/outline/arrow-path-rounded-square.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ArrowPathRoundedSquareSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ArrowPathRoundedSquare" />
