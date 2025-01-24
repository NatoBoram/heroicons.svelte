<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentMagnifyingGlassSvelte from '../../../lib/20/solid/document-magnifying-glass.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: DocumentMagnifyingGlassSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="DocumentMagnifyingGlass" />
