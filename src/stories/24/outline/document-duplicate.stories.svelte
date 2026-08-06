<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentDuplicateSvelte from '../../../lib/24/outline/document-duplicate.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: DocumentDuplicateSvelte,
		args: { class: '' },
	})
</script>

<Story name="DocumentDuplicate" />
