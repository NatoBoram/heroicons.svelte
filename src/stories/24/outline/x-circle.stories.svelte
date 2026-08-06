<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import XCircleSvelte from '../../../lib/24/outline/x-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: XCircleSvelte,
		args: { class: '' },
	})
</script>

<Story name="XCircle" />
