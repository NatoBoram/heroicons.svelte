<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import MinusSvelte from '../../../lib/24/outline/minus.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: MinusSvelte,
		args: { class: '' },
	})
</script>

<Story name="Minus" />
