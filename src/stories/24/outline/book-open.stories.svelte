<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BookOpenSvelte from '../../../lib/24/outline/book-open.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: BookOpenSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="BookOpen" />
