<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import TagSvelte from '../../../lib/24/outline/tag.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: TagSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Tag" />
