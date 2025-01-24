<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowUturnLeftSvelte from '../../../lib/24/outline/arrow-uturn-left.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ArrowUturnLeftSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ArrowUturnLeft" />
