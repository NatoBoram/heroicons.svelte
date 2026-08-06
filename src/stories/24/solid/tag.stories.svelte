<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import TagSvelte from '../../../lib/24/solid/tag.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: TagSvelte,
		args: { class: '' },
	})
</script>

<Story name="Tag" />
