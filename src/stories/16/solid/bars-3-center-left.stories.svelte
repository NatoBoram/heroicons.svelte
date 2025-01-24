<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import Bars3CenterLeftSvelte from '../../../lib/16/solid/bars-3-center-left.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: Bars3CenterLeftSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Bars3CenterLeft" />
