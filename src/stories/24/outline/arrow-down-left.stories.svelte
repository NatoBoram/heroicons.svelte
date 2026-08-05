<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowDownLeftSvelte from '../../../lib/24/outline/arrow-down-left.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ArrowDownLeftSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowDownLeft" />
