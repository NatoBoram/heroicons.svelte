<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowUpLeftSvelte from '../../../lib/24/outline/arrow-up-left.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ArrowUpLeftSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowUpLeft" />
