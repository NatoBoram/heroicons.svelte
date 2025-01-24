<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowDownLeftSvelte from '../../../lib/24/solid/arrow-down-left.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ArrowDownLeftSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ArrowDownLeft" />
