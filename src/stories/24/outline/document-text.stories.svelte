<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentTextSvelte from '../../../lib/24/outline/document-text.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: DocumentTextSvelte,
		args: { class: '' },
	})
</script>

<Story name="DocumentText" />
