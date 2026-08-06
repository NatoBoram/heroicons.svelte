<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CircleStackSvelte from '../../../lib/24/solid/circle-stack.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: CircleStackSvelte,
		args: { class: '' },
	})
</script>

<Story name="CircleStack" />
