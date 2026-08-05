<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentTextSvelte from '../../../lib/20/solid/document-text.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: DocumentTextSvelte,
		args: { class: '' },
	})
</script>

<Story name="DocumentText" />
