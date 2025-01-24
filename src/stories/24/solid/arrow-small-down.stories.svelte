<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowSmallDownSvelte from '../../../lib/24/solid/arrow-small-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ArrowSmallDownSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ArrowSmallDown" />
