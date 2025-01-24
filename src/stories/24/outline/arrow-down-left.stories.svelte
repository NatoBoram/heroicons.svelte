<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowDownLeftSvelte from '../../../lib/24/outline/arrow-down-left.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ArrowDownLeftSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ArrowDownLeft" />
