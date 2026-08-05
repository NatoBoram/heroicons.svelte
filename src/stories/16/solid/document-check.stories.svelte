<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentCheckSvelte from '../../../lib/16/solid/document-check.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: DocumentCheckSvelte,
		args: { class: '' },
	})
</script>

<Story name="DocumentCheck" />
