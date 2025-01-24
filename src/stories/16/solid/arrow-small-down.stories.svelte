<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowSmallDownSvelte from '../../../lib/16/solid/arrow-small-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ArrowSmallDownSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ArrowSmallDown" />
