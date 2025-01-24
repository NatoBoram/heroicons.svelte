<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import EllipsisHorizontalSvelte from '../../../lib/16/solid/ellipsis-horizontal.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: EllipsisHorizontalSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="EllipsisHorizontal" />
