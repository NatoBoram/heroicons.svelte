<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentMagnifyingGlassSvelte from '../../../lib/16/solid/document-magnifying-glass.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: DocumentMagnifyingGlassSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="DocumentMagnifyingGlass" />
