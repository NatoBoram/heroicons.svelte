<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowRightStartOnRectangleSvelte from '../../../lib/20/solid/arrow-right-start-on-rectangle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ArrowRightStartOnRectangleSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="ArrowRightStartOnRectangle" />
