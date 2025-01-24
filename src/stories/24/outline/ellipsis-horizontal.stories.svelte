<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import EllipsisHorizontalSvelte from '../../../lib/24/outline/ellipsis-horizontal.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: EllipsisHorizontalSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="EllipsisHorizontal" />
