<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import Bars2Svelte from '../../../lib/24/outline/bars-2.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: Bars2Svelte,
		args: { class: '' },
	})
</script>

<Story name="Bars2" />
