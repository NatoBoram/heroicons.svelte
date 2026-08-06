<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import TagSvelte from '../../../lib/16/solid/tag.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: TagSvelte,
		args: { class: '' },
	})
</script>

<Story name="Tag" />
