<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowDownSvelte from '../../../lib/16/solid/arrow-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ArrowDownSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ArrowDown" />
