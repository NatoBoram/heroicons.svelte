<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import LinkSvelte from '../../../lib/24/outline/link.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: LinkSvelte,
		args: { class: '' },
	})
</script>

<Story name="Link" />
