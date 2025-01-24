<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowDownSvelte from '../../../lib/24/solid/arrow-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ArrowDownSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ArrowDown" />
