<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import MinusCircleSvelte from '../../../lib/24/outline/minus-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: MinusCircleSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="MinusCircle" />
