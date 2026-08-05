<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ExclamationTriangleSvelte from '../../../lib/16/solid/exclamation-triangle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ExclamationTriangleSvelte,
		args: { class: '' },
	})
</script>

<Story name="ExclamationTriangle" />
