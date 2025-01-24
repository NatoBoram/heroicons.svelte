<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentTextSvelte from '../../../lib/24/outline/document-text.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: DocumentTextSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="DocumentText" />
