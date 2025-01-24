<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentMagnifyingGlassSvelte from '../../../lib/24/solid/document-magnifying-glass.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: DocumentMagnifyingGlassSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="DocumentMagnifyingGlass" />
