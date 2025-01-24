<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import Bars3CenterLeftSvelte from '../../../lib/24/outline/bars-3-center-left.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: Bars3CenterLeftSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Bars3CenterLeft" />
