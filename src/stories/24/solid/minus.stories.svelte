<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import MinusSvelte from '../../../lib/24/solid/minus.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: MinusSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Minus" />
