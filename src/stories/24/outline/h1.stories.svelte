<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import H1Svelte from '../../../lib/24/outline/h1.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: H1Svelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="H1" />
