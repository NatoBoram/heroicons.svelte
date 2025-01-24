<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import EllipsisVerticalSvelte from '../../../lib/16/solid/ellipsis-vertical.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: EllipsisVerticalSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="EllipsisVertical" />
