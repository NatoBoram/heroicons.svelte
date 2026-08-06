<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import MinusSmallSvelte from '../../../lib/24/solid/minus-small.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: MinusSmallSvelte,
		args: { class: '' },
	})
</script>

<Story name="MinusSmall" />
