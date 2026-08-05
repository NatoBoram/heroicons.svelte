<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentMinusSvelte from '../../../lib/20/solid/document-minus.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: DocumentMinusSvelte,
		args: { class: '' },
	})
</script>

<Story name="DocumentMinus" />
