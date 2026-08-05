<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowSmallLeftSvelte from '../../../lib/24/outline/arrow-small-left.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ArrowSmallLeftSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowSmallLeft" />
