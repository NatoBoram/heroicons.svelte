<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import Squares2x2Svelte from '../../../lib/24/solid/squares-2x2.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: Squares2x2Svelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Squares2x2" />
