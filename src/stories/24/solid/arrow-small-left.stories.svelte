<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowSmallLeftSvelte from '../../../lib/24/solid/arrow-small-left.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ArrowSmallLeftSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowSmallLeft" />
