<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowUpRightSvelte from '../../../lib/24/solid/arrow-up-right.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ArrowUpRightSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowUpRight" />
