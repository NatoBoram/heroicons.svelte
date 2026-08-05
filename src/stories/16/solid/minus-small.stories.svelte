<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import MinusSmallSvelte from '../../../lib/16/solid/minus-small.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: MinusSmallSvelte,
		args: { class: '' },
	})
</script>

<Story name="MinusSmall" />
