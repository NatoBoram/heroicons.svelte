<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import EllipsisHorizontalSvelte from '../../../lib/20/solid/ellipsis-horizontal.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: EllipsisHorizontalSvelte,
		args: { class: '' },
	})
</script>

<Story name="EllipsisHorizontal" />
