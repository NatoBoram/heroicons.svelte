<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import MinusCircleSvelte from '../../../lib/24/solid/minus-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: MinusCircleSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="MinusCircle" />
