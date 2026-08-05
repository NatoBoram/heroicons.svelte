<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import LinkSvelte from '../../../lib/24/solid/link.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: LinkSvelte,
		args: { class: '' },
	})
</script>

<Story name="Link" />
