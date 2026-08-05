<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentCheckSvelte from '../../../lib/24/outline/document-check.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: DocumentCheckSvelte,
		args: { class: '' },
	})
</script>

<Story name="DocumentCheck" />
