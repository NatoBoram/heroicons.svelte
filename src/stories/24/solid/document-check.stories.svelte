<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentCheckSvelte from '../../../lib/24/solid/document-check.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: DocumentCheckSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="DocumentCheck" />
