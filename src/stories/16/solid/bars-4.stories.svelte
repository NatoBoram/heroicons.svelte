<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import Bars4Svelte from '../../../lib/16/solid/bars-4.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: Bars4Svelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Bars4" />
