<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowUpLeftSvelte from '../../../lib/24/solid/arrow-up-left.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ArrowUpLeftSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ArrowUpLeft" />
