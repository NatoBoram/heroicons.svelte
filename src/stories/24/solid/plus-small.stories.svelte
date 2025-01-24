<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PlusSmallSvelte from '../../../lib/24/solid/plus-small.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: PlusSmallSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="PlusSmall" />
