<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import EllipsisVerticalSvelte from '../../../lib/20/solid/ellipsis-vertical.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: EllipsisVerticalSvelte,
		args: { class: '' },
	})
</script>

<Story name="EllipsisVertical" />
