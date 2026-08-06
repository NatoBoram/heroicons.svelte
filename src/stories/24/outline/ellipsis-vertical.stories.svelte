<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import EllipsisVerticalSvelte from '../../../lib/24/outline/ellipsis-vertical.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: EllipsisVerticalSvelte,
		args: { class: '' },
	})
</script>

<Story name="EllipsisVertical" />
