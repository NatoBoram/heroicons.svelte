<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import EllipsisVerticalSvelte from '../../../lib/24/solid/ellipsis-vertical.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: EllipsisVerticalSvelte,
		args: { class: '' },
	})
</script>

<Story name="EllipsisVertical" />
