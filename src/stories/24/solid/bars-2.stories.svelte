<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import Bars2Svelte from '../../../lib/24/solid/bars-2.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: Bars2Svelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Bars2" />
