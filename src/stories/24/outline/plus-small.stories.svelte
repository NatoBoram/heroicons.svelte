<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PlusSmallSvelte from '../../../lib/24/outline/plus-small.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: PlusSmallSvelte,
		args: { class: '' },
	})
</script>

<Story name="PlusSmall" />
