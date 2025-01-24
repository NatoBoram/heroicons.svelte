<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import MinusSmallSvelte from '../../../lib/24/solid/minus-small.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: MinusSmallSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="MinusSmall" />
