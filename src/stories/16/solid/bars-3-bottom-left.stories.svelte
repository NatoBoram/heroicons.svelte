<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import Bars3BottomLeftSvelte from '../../../lib/16/solid/bars-3-bottom-left.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: Bars3BottomLeftSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Bars3BottomLeft" />
