<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowDownLeftSvelte from '../../../lib/16/solid/arrow-down-left.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ArrowDownLeftSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowDownLeft" />
