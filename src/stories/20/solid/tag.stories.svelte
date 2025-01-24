<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import TagSvelte from '../../../lib/20/solid/tag.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: TagSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="Tag" />
