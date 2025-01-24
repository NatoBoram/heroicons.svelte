<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import MinusSvelte from '../../../lib/16/solid/minus.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: MinusSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Minus" />
