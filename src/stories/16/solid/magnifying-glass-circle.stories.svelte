<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import MagnifyingGlassCircleSvelte from '../../../lib/16/solid/magnifying-glass-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: MagnifyingGlassCircleSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="MagnifyingGlassCircle" />
