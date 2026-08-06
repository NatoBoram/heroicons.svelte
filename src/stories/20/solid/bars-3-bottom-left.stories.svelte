<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import Bars3BottomLeftSvelte from '../../../lib/20/solid/bars-3-bottom-left.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: Bars3BottomLeftSvelte,
		args: { class: '' },
	})
</script>

<Story name="Bars3BottomLeft" />
