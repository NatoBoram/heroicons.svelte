<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowUpSvelte from '../../../lib/20/solid/arrow-up.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ArrowUpSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="ArrowUp" />
