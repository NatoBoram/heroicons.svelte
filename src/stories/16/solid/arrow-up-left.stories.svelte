<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowUpLeftSvelte from '../../../lib/16/solid/arrow-up-left.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ArrowUpLeftSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ArrowUpLeft" />
