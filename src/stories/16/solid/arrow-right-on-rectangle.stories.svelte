<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowRightOnRectangleSvelte from '../../../lib/16/solid/arrow-right-on-rectangle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ArrowRightOnRectangleSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ArrowRightOnRectangle" />
