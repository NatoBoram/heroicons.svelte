<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import MagnifyingGlassCircleSvelte from '../../../lib/20/solid/magnifying-glass-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: MagnifyingGlassCircleSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="MagnifyingGlassCircle" />
