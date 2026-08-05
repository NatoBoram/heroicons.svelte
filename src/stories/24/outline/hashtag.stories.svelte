<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import HashtagSvelte from '../../../lib/24/outline/hashtag.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: HashtagSvelte,
		args: { class: '' },
	})
</script>

<Story name="Hashtag" />
