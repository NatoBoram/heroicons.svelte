<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentTextSvelte from '../../../lib/24/solid/document-text.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: DocumentTextSvelte,
		args: { class: '' },
	})
</script>

<Story name="DocumentText" />
