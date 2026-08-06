<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import EllipsisHorizontalCircleSvelte from '../../../lib/20/solid/ellipsis-horizontal-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: EllipsisHorizontalCircleSvelte,
		args: { class: '' },
	})
</script>

<Story name="EllipsisHorizontalCircle" />
