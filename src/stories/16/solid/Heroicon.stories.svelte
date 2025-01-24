<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import Heroicon from '../../../lib/16/solid/Heroicon.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: Heroicon,
		tags: ['autodocs'],
		args: { class: 'w-4 h-4', icon: 'academic-cap' },
	})
</script>

<Story name="Micro Heroicon" />
