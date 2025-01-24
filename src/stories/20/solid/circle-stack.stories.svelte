<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CircleStackSvelte from '../../../lib/20/solid/circle-stack.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: CircleStackSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="CircleStack" />
