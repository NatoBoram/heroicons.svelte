<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import Heroicon from '../../../lib/24/solid/Heroicon.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: Heroicon,
		tags: ['autodocs'],
		args: { class: 'w-6 h-6', icon: 'academic-cap' },
	})
</script>

<Story name="Solid Heroicon" />
