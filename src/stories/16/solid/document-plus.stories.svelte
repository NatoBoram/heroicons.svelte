<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentPlusSvelte from '../../../lib/16/solid/document-plus.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: DocumentPlusSvelte,
		args: { class: '' },
	})
</script>

<Story name="DocumentPlus" />
