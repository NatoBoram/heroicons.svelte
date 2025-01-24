<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowUpSvelte from '../../../lib/16/solid/arrow-up.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ArrowUpSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ArrowUp" />
