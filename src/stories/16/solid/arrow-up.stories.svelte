<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowUpSvelte from '../../../lib/16/solid/arrow-up.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ArrowUpSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowUp" />
