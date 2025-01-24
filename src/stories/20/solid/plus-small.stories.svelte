<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PlusSmallSvelte from '../../../lib/20/solid/plus-small.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: PlusSmallSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="PlusSmall" />
