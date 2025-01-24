<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowUpRightSvelte from '../../../lib/16/solid/arrow-up-right.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ArrowUpRightSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ArrowUpRight" />
