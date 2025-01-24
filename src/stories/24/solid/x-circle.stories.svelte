<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import XCircleSvelte from '../../../lib/24/solid/x-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: XCircleSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="XCircle" />
