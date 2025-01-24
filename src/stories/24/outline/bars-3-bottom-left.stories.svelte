<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import Bars3BottomLeftSvelte from '../../../lib/24/outline/bars-3-bottom-left.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: Bars3BottomLeftSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Bars3BottomLeft" />
