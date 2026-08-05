<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ExclamationTriangleSvelte from '../../../lib/24/outline/exclamation-triangle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ExclamationTriangleSvelte,
		args: { class: '' },
	})
</script>

<Story name="ExclamationTriangle" />
