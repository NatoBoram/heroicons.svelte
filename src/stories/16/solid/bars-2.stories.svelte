<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import Bars2Svelte from '../../../lib/16/solid/bars-2.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: Bars2Svelte,
		args: { class: '' },
	})
</script>

<Story name="Bars2" />
