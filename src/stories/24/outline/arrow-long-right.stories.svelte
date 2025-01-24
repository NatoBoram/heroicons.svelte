<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowLongRightSvelte from '../../../lib/24/outline/arrow-long-right.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ArrowLongRightSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ArrowLongRight" />
