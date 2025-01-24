<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import Heroicon from '../../../lib/20/solid/Heroicon.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: Heroicon,
		tags: ['autodocs'],
		args: { class: 'w-5 h-5', icon: 'academic-cap' },
	})
</script>

<Story name="Mini Heroicon" />
