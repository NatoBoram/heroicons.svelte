<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import Bars3BottomRightSvelte from '../../../lib/16/solid/bars-3-bottom-right.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: Bars3BottomRightSvelte,
		args: { class: '' },
	})
</script>

<Story name="Bars3BottomRight" />
