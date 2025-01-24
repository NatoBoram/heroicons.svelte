<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentTextSvelte from '../../../lib/20/solid/document-text.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: DocumentTextSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="DocumentText" />
