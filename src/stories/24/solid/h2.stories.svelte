<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import H2Svelte from '../../../lib/24/solid/h2.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: H2Svelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="H2" />
