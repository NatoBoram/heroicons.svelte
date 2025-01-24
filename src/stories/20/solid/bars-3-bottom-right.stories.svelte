<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import Bars3BottomRightSvelte from '../../../lib/20/solid/bars-3-bottom-right.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: Bars3BottomRightSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="Bars3BottomRight" />
