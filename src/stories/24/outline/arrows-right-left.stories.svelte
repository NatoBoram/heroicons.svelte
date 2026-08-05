<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowsRightLeftSvelte from '../../../lib/24/outline/arrows-right-left.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ArrowsRightLeftSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowsRightLeft" />
