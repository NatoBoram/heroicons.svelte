<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import RssSvelte from '../../../lib/24/solid/rss.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: RssSvelte,
		args: { class: '' },
	})
</script>

<Story name="Rss" />
