<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowUpRightSvelte from '../../../lib/24/solid/arrow-up-right.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ArrowUpRightSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ArrowUpRight" />
