<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentPlusSvelte from '../../../lib/24/solid/document-plus.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: DocumentPlusSvelte,
		args: { class: '' },
	})
</script>

<Story name="DocumentPlus" />
