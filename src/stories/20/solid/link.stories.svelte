<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import LinkSvelte from '../../../lib/20/solid/link.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: LinkSvelte,
		args: { class: '' },
	})
</script>

<Story name="Link" />
