<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowDownLeftSvelte from '../../../lib/20/solid/arrow-down-left.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ArrowDownLeftSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="ArrowDownLeft" />
