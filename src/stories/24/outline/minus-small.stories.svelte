<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import MinusSmallSvelte from '../../../lib/24/outline/minus-small.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: MinusSmallSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="MinusSmall" />
