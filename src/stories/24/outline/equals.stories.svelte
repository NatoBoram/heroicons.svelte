<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import EqualsSvelte from '../../../lib/24/outline/equals.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: EqualsSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Equals" />
