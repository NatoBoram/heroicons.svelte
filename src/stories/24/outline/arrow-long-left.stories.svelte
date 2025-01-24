<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowLongLeftSvelte from '../../../lib/24/outline/arrow-long-left.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ArrowLongLeftSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ArrowLongLeft" />
