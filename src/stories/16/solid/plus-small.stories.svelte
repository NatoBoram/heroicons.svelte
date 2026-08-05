<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PlusSmallSvelte from '../../../lib/16/solid/plus-small.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: PlusSmallSvelte,
		args: { class: '' },
	})
</script>

<Story name="PlusSmall" />
