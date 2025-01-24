<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ExclamationTriangleSvelte from '../../../lib/24/outline/exclamation-triangle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ExclamationTriangleSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ExclamationTriangle" />
