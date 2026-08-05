<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowUpLeftSvelte from '../../../lib/16/solid/arrow-up-left.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ArrowUpLeftSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowUpLeft" />
