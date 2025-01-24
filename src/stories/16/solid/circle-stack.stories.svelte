<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CircleStackSvelte from '../../../lib/16/solid/circle-stack.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: CircleStackSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="CircleStack" />
