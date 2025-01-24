<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import MinusSmallSvelte from '../../../lib/20/solid/minus-small.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: MinusSmallSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="MinusSmall" />
