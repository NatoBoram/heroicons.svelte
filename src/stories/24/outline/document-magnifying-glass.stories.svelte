<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentMagnifyingGlassSvelte from '../../../lib/24/outline/document-magnifying-glass.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: DocumentMagnifyingGlassSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="DocumentMagnifyingGlass" />
