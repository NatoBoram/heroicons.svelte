<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import XCircleSvelte from '../../../lib/24/outline/x-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: XCircleSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="XCircle" />
