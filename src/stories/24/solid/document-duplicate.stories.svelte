<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentDuplicateSvelte from '../../../lib/24/solid/document-duplicate.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: DocumentDuplicateSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="DocumentDuplicate" />
