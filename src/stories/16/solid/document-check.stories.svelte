<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentCheckSvelte from '../../../lib/16/solid/document-check.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: DocumentCheckSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="DocumentCheck" />
