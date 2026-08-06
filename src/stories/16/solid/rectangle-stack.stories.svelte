<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import RectangleStackSvelte from '../../../lib/16/solid/rectangle-stack.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: RectangleStackSvelte,
		args: { class: '' },
	})
</script>

<Story name="RectangleStack" />
