<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CircleStackSvelte from '../../../lib/24/outline/circle-stack.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: CircleStackSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="CircleStack" />
