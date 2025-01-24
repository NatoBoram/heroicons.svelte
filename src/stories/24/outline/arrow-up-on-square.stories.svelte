<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowUpOnSquareSvelte from '../../../lib/24/outline/arrow-up-on-square.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ArrowUpOnSquareSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ArrowUpOnSquare" />
