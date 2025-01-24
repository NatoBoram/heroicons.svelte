<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentPlusSvelte from '../../../lib/20/solid/document-plus.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: DocumentPlusSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="DocumentPlus" />
