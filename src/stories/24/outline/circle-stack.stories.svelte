<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CircleStackSvelte from '../../../lib/24/outline/circle-stack.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: CircleStackSvelte,
		args: { class: '' },
	})
</script>

<Story name="CircleStack" />
