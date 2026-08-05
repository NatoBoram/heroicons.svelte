<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import H1Svelte from '../../../lib/24/solid/h1.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: H1Svelte,
		args: { class: '' },
	})
</script>

<Story name="H1" />
