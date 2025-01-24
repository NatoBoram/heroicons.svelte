<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentSvelte from '../../../lib/16/solid/document.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: DocumentSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Document" />
