<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentDuplicateSvelte from '../../../lib/20/solid/document-duplicate.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: DocumentDuplicateSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="DocumentDuplicate" />
