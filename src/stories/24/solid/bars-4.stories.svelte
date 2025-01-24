<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import Bars4Svelte from '../../../lib/24/solid/bars-4.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: Bars4Svelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Bars4" />
