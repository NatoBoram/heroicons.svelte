<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowUpSvelte from '../../../lib/20/solid/arrow-up.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ArrowUpSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowUp" />
