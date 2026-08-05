<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentSvelte from '../../../lib/16/solid/document.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: DocumentSvelte,
		args: { class: '' },
	})
</script>

<Story name="Document" />
