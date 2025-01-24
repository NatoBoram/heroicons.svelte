<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ExclamationTriangleSvelte from '../../../lib/16/solid/exclamation-triangle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ExclamationTriangleSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ExclamationTriangle" />
