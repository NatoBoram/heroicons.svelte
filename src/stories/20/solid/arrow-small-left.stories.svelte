<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowSmallLeftSvelte from '../../../lib/20/solid/arrow-small-left.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ArrowSmallLeftSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="ArrowSmallLeft" />
