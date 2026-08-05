<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ExclamationTriangleSvelte from '../../../lib/20/solid/exclamation-triangle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ExclamationTriangleSvelte,
		args: { class: '' },
	})
</script>

<Story name="ExclamationTriangle" />
