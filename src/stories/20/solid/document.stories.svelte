<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentSvelte from '../../../lib/20/solid/document.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: DocumentSvelte,
		args: { class: '' },
	})
</script>

<Story name="Document" />
