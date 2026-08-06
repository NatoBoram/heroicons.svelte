<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import EllipsisHorizontalCircleSvelte from '../../../lib/24/outline/ellipsis-horizontal-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: EllipsisHorizontalCircleSvelte,
		args: { class: '' },
	})
</script>

<Story name="EllipsisHorizontalCircle" />
