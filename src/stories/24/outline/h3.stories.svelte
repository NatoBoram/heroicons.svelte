<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import H3Svelte from '../../../lib/24/outline/h3.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: H3Svelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="H3" />
