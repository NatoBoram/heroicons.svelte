<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PlusSmallSvelte from '../../../lib/24/outline/plus-small.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: PlusSmallSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="PlusSmall" />
