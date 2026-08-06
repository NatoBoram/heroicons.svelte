<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import EllipsisHorizontalSvelte from '../../../lib/24/solid/ellipsis-horizontal.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: EllipsisHorizontalSvelte,
		args: { class: '' },
	})
</script>

<Story name="EllipsisHorizontal" />
