<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowUpRightSvelte from '../../../lib/24/outline/arrow-up-right.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ArrowUpRightSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ArrowUpRight" />
