<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import H1Svelte from '../../../lib/16/solid/h1.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: H1Svelte,
		args: { class: '' },
	})
</script>

<Story name="H1" />
