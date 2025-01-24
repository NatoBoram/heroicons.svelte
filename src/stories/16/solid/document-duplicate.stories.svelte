<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentDuplicateSvelte from '../../../lib/16/solid/document-duplicate.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: DocumentDuplicateSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="DocumentDuplicate" />
