<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import Bars3BottomLeftSvelte from '../../../lib/24/outline/bars-3-bottom-left.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: Bars3BottomLeftSvelte,
		args: { class: '' },
	})
</script>

<Story name="Bars3BottomLeft" />
