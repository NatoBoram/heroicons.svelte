<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import Heroicon from '../../../lib/24/outline/Heroicon.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: Heroicon,
		tags: ['autodocs'],
		args: { class: '', icon: 'academic-cap' },
	})
</script>

<Story name="Outline Heroicon" />
