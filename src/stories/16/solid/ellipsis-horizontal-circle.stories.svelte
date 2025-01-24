<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import EllipsisHorizontalCircleSvelte from '../../../lib/16/solid/ellipsis-horizontal-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: EllipsisHorizontalCircleSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="EllipsisHorizontalCircle" />
