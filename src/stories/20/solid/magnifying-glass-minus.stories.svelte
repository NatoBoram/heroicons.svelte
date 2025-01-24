<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import MagnifyingGlassMinusSvelte from '../../../lib/20/solid/magnifying-glass-minus.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: MagnifyingGlassMinusSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="MagnifyingGlassMinus" />
