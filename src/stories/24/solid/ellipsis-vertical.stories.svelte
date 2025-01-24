<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import EllipsisVerticalSvelte from '../../../lib/24/solid/ellipsis-vertical.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: EllipsisVerticalSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="EllipsisVertical" />
