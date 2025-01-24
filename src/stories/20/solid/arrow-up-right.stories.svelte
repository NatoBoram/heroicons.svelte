<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowUpRightSvelte from '../../../lib/20/solid/arrow-up-right.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ArrowUpRightSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="ArrowUpRight" />
