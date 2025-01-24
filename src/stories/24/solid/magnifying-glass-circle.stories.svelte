<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import MagnifyingGlassCircleSvelte from '../../../lib/24/solid/magnifying-glass-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: MagnifyingGlassCircleSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="MagnifyingGlassCircle" />
