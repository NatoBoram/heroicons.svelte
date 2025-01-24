<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowSmallRightSvelte from '../../../lib/24/outline/arrow-small-right.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ArrowSmallRightSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ArrowSmallRight" />
