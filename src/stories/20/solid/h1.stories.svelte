<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import H1Svelte from '../../../lib/20/solid/h1.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: H1Svelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="H1" />
