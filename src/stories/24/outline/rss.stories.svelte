<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import RssSvelte from '../../../lib/24/outline/rss.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: RssSvelte,
		args: { class: '' },
	})
</script>

<Story name="Rss" />
