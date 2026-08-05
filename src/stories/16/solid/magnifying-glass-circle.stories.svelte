<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import MagnifyingGlassCircleSvelte from '../../../lib/16/solid/magnifying-glass-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: MagnifyingGlassCircleSvelte,
		args: { class: '' },
	})
</script>

<Story name="MagnifyingGlassCircle" />
